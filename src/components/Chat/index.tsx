import React from 'react'

interface ChatProps extends React.HTMLProps<HTMLDivElement> {
  avatar: string
  name: string
  status: string
  message?: string
  children?: React.ReactNode
}

function Chat({ avatar, name, status, message, children, className = '', ...props }: ChatProps) {
  return (
    <article
      className={`w-chat h-chat bg-secondary-white rounded-chat-outer shadow py-chat-y px-chat-x ${className}`}
      {...props}
    >
      <div className="bg-primary-white" />
      <div className="gradient" />
      <div className="grid gap-4 justify-items-start rounded-chat-inner bg-primary-violet-lightest p-chat-inner">
        {children}
      </div>
      <div className="">
        {message ? <div>{message}</div> : <div>Type a message...</div>}
        <div />
      </div>
    </article>
  )
}

export default Chat
