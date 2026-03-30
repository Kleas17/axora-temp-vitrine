import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'from-blue-500',
    'to-purple-600',
    'bg-gradient-to-r',
    'bg-gradient-to-br',
    'from-axora-blue',
    'to-axora-purple',
    'text-axora-blue',
    'text-axora-purple',
    'border-axora-blue',
    'border-axora-purple',
  ],
  theme: {
    extend: {
      colors: {
        'axora-blue': '#3B82F6',
        'axora-purple': '#8B5CF6',
        'axora-dark': '#080810',
        'axora-card': '#0f0f1a',
        'axora-border': '#1a1a2e',
        'axora-accent': '#6366F1',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 30s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-axora': 'linear-gradient(135deg, #3B82F6, #8B5CF6)',
      },
      boxShadow: {
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.3)',
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.3)',
        'glow-accent': '0 0 30px rgba(99, 102, 241, 0.2)',
        'card-hover': '0 20px 60px rgba(99, 102, 241, 0.15)',
      },
    },
  },
  plugins: [],
}
export default config
