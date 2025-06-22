import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Você pode logar o erro em um serviço externo aqui
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center text-red-700 bg-red-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ocorreu um erro inesperado</h2>
          <p className="mb-2">Desculpe, algo deu errado ao exibir esta página.</p>
          <details className="text-left text-xs whitespace-pre-wrap mx-auto max-w-xl" style={{ color: '#b91c1c' }}>
            {this.state.error?.toString()}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
} 