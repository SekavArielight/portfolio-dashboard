import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div
          style={{
            padding: "20px",
            margin: "20px",
            border: "1px solid #f56565",
            borderRadius: "5px",
            backgroundColor: "#fff5f5",
          }}
        >
          <h2 style={{ color: "#e53e3e" }}>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>
            <summary>Show error details</summary>
            <p>{this.state.error && this.state.error.toString()}</p>
            <p>Component Stack:</p>
            <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
