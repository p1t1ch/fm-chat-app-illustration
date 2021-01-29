import React from 'react'

interface ChatProps extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode
}

function Chat({ children, className = '', ...props }: ChatProps) {
  return (
    <article className={`w-chat h-chat bg-secondary-white ${className}`} {...props}>
      {children}
    </article>
  )
}

export default Chat
