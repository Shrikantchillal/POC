import React from 'react';

type ErrorBoundaryProps = {
    children?: any;
};

class ErrorBoundary extends React.Component<ErrorBoundaryProps, any> {
    state = {
        hasError: null
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.info(error)
    }

    static getDerivedStateFromError(error: any) {
        return { hasError: error }
    }

    render() {
        if (this.state.hasError) {
            return 'There is an error!'
        }

        return this.props.children;
    }

};

export default ErrorBoundary;