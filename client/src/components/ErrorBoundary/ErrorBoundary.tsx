import React from 'react'
import Message, { MessageTypes, MessageTextSizes } from '../Message/Message'

export interface ErrorBoundaryState {
  hasError: boolean,
  error: Error,
  errorInfo: React.ErrorInfo,
}

export default class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, err: error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ hasError: true, error: error, errorInfo: errorInfo });
  }

  render(): any {
    if (this.state.hasError) {
      return <Message type={MessageTypes.msgError} size={MessageTextSizes.msgBig} text='Oooops, something went wrong' />
    }
    return this.props.children;
  }
}
