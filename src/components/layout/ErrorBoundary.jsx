import { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Quiz error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-2xl font-bold text-warm-white mb-4">Something went wrong</h1>
          <p className="text-warm-white/70 mb-8 max-w-md">
            An unexpected error occurred. Please try refreshing the page or starting over.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            className="bg-gold text-navy font-bold px-8 py-3 rounded-xl
                       hover:bg-gold/90 transition-colors cursor-pointer"
          >
            Start Over
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
