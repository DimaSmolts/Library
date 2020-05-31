import React from 'react'
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
  type: MessageTypes,
  size: MessageTextSizes,
}

const Message: React.SFC<MessageProps> = (props: MessageProps) => {
  return (
    <div className='message-container'>
      <p className={
        'message ' +
        MessageTextSizes[props.size] + ' ' +
        MessageTypes[props.type]}>
        {props.text}
      </p>
    </div>
  )
}

export default Message
