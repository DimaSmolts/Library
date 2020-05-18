import React from 'react';
import './Message.css'

export enum MessageTypes {
  msgError,
  msgInfo,
  msgSuccess,
  msgNotFound,
}

export enum MessageTextSizes {
  msgSmall,
  msgMedium,
  msgBig,
}

export interface MessageProps {
  text: string,
  type: MessageTypes
  size: MessageTextSizes
}

export default class Message extends React.Component<MessageProps> {
  render() {
    return (
      <div className='message-container'>
        <p className={
          'message ' +
          MessageTextSizes[this.props.size] + ' ' +
          MessageTypes[this.props.type]}>
          {this.props.text}
        </p>
      </div>
    )
  }
}
