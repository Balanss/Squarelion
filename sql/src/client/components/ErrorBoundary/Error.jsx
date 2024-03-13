import React from 'react';
import error from '../images/404.jpg';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className='absolute z-50  inset-0 opacity-100'>
                  <img
          className={` w-full h-full transition-opacity duration-1000 opacity-75
          }`}
          src={error}
          alt="Header Background"
        />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;