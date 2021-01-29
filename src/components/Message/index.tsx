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
      className={`shadow-message text-message rounded-message ${
        !price && position === 'left'
          ? 'text-primary-violet-moderate bg-primary-violet-light'
          : !price && !images
          ? 'text-primary-violet-dark bg-secondary-white'
          : 'text-secondary-white gradient'
      } ${
        !price
          ? 'px-2 py-message max-w-message'
          : 'w-message-activity grid grid-cols-price gap-2 items-center pl-2 pr-4 py-message-price'
      } ${position === 'left' ? 'rounded-bl-message-small' : 'justify-self-end rounded-br-message-small'} ${
        price && position === 'right' ? 'rtl' : ''
      }${className}`}
      {...props}
    >
      {price ? (
        <>
          <div className="w-3 h-3 border border-secondary-magenta rounded-full" />
          <div>{children}</div>
          <div className="font-bold text-xs">${price}</div>
        </>
      ) : (
        children
      )}
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
