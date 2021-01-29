import toArray from '@/utils/toArray'
import React from 'react'

interface MessageProps extends React.HTMLProps<HTMLDivElement> {
  children?: React.ReactNode
  position?: 'left' | 'right'
  price?: number
  images?: string | string[]
}

function Message({ children, position = 'left', price, images, className = '', ...props }: MessageProps) {
  return children ? (
    <div
      className={`shadow-message text-message px-2 rounded-message ${
        !price && position === 'left'
          ? 'text-primary-violet-moderate bg-primary-violet-light'
          : !price && !images
          ? 'text-primary-violet-dark bg-secondary-white'
          : 'text-secondary-white gradient'
      } ${!price ? 'py-message' : 'py-message-price'} ${price ? 'max-w-message-activity' : 'max-w-message'} ${
        position === 'left' ? 'rounded-bl-message-small' : 'justify-self-end rounded-br-message-small'
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  ) : images ? (
    <div
      className={`grid grid-cols-3 gap-2 ${position === 'right' ? 'justify-self-end rtl' : ''} ${className}`}
      {...props}
    >
      {toArray(images).map((image, index) => (
        <img key={index} src={image} alt="" className="w-10 rounded-message shadow-message" />
      ))}
    </div>
  ) : null
}

export default Message
