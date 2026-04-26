import { NextResponse } from 'next/server'
import { Resend } from 'resend'

export const dynamic = 'force-dynamic'

const resend = new Resend(process.env.RESEND_API_KEY)

// Simple in-memory rate limiter — 3 requests per IP per minute
const rateLimit = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT_WINDOW = 60 * 1000
const RATE_LIMIT_MAX = 3

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW })
    return true
  }
  if (entry.count >= RATE_LIMIT_MAX) return false
  entry.count++
  return true
}

async function verifyHcaptcha(token: string): Promise<boolean> {
  const res = await fetch('https://api.hcaptcha.com/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET_KEY ?? '',
      response: token,
    }),
  })
  const data = await res.json()
  return data.success === true
}

export async function POST(request: Request) {
  try {
    // Rate limiting by IP
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
      request.headers.get('x-real-ip') ??
      'unknown'

    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'Trop de requêtes. Réessayez dans une minute.' }, { status: 429 })
    }

    const body = await request.json()
    const { nom, email, telephone, entreprise, typeProjet, budget, message, hcaptchaToken, website } = body

    // Honeypot check — bots fill this field, humans don't
    if (website) {
      return NextResponse.json({ success: true }) // Silent success to not tip off bots
    }

    if (!nom || !email || !typeProjet || !message) {
      return NextResponse.json({ error: 'Champs requis manquants' }, { status: 400 })
    }

    // Basic server-side validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email invalide' }, { status: 400 })
    }
    if (message.length > 5000) {
      return NextResponse.json({ error: 'Message trop long' }, { status: 400 })
    }

    if (!hcaptchaToken) {
      return NextResponse.json({ error: 'Validation captcha manquante' }, { status: 400 })
    }

    const captchaValid = await verifyHcaptcha(hcaptchaToken)
    if (!captchaValid) {
      return NextResponse.json({ error: 'Validation captcha échouée' }, { status: 400 })
    }

    const { error } = await resend.emails.send({
      from: 'no-reply@axora-studio.fr',
      to: 'contact@axora-studio.fr',
      replyTo: email,
      subject: `Nouvelle demande — ${typeProjet} (${nom})`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #1a1a2e; margin-bottom: 24px;">Nouvelle demande de contact</h2>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; width: 140px; font-size: 14px;">Nom</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: 600;">${nom}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            ${telephone ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Téléphone</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${telephone}</td>
            </tr>` : ''}
            ${entreprise ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Entreprise</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${entreprise}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Type de projet</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px; font-weight: 600;">${typeProjet}</td>
            </tr>
            ${budget ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">Budget</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-size: 14px;">${budget}</td>
            </tr>` : ''}
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #6b7280; font-size: 14px; margin-bottom: 8px;">Message</p>
            <div style="background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px; color: #111827; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">Répondre directement à cet email contacte ${nom} à l'adresse ${email}</p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Erreur lors de l\'envoi' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact route error:', err)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}
