import { Component, ErrorInfo } from "react";

type Props = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false };

  // constructor(props) {
  //   super(props);
  //   this.state = { hasError: false };
  // }

  static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // log to logger , sentry ect.
    // Sentry.captureError(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          {this.props.fallback ? (
            this.props.fallback
          ) : (
            <p>Oh no! An error ocurred</p>
          )}
          <button onClick={() => this.setState({ hasError: true })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
