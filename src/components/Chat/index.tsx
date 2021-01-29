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
      className={`relative w-chat bg-secondary-white rounded-chat-outer shadow py-chat-y px-chat-x ${className}`}
      {...props}
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-top h-top rounded-br-top rounded-bl-top bg-secondary-white" />
      <div className="rounded-chat-inner bg-primary-violet-lightest p-chat-inner">
        <div className="grid grid-cols-profile grid-rows-2 gap-x-2 items-center px-4 pb-3 pt-profile gradient rounded-tl-chat-inner rounded-tr-chat-inner rounded-br-profile rounded-bl-profile">
          <div className="row-span-full relative w-1 h-arrow">
            <div className="absolute right-0 top-0 bg-secondary-white rounded-full w-1/2 h-3/5 transform translate-x-60 rotate-28" />
            <div className="absolute right-0 bottom-0 bg-secondary-white rounded-full w-1/2 h-3/5 transform translate-x-60 -rotate-28" />
          </div>
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="row-span-full w-6 h-6 border border-secondary-white rounded-full"
          />
          <div className="font-medium text-secondary-white text-profile">{name}</div>
          <div className="text-primary-violet-pale text-message">{status}</div>
          <div className="row-span-full col-start-4 grid gap-circle">
            <div className="circle" />
            <div className="circle" />
            <div className="circle" />
          </div>
        </div>
        <div className="px-screen-x pb-screen-b pt-screen-t">
          <div className="grid gap-2 justify-items-start h-screen overflow-y-auto">{children}</div>
          <div className="bg-secondary-white rounded-full pl-5 pr-1 mt-4 h-textbox flex items-center">
            <div className={`text-textbox ${message ? 'text-primary-violet-darkest' : 'text-primary-blue'} flex-grow`}>
              {message || 'Type a message...'}
            </div>
            <div className="bg-primary-violet-darkest w-send h-send grid place-items-center rounded-full ml-4">
              <div className="relative w-send-arrow h-send-arrow">
                <div className="absolute -left-1/20 top-11/20 bg-secondary-white rounded-full w-11/10 h-1/5 transform -rotate-45" />
                <div className="absolute -left-1/20 bottom-13/20 bg-secondary-white rounded-full w-11/10 h-1/5 transform rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Chat
