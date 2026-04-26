'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <h2 className="text-2xl font-bold text-white mb-3">Une erreur est survenue</h2>
            <p className="text-slate-400 mb-6">Rechargez la page ou revenez à l'accueil.</p>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-xl btn-gradient"
            >
              Retour à l'accueil
            </a>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
