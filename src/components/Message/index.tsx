import React from 'react'
import { useSpring, animated } from 'react-spring'
import toArray from '@/utils/toArray'

interface MessageProps extends Omit<React.HTMLProps<HTMLDivElement>, 'ref'> {
  children?: React.ReactNode
  position?: 'left' | 'right'
  price?: number
  images?: string | string[]
  startIndex?: number
}

function Message({
  children,
  position = 'left',
  price,
  images,
  startIndex = 0,
  className = '',
  style,
  ...props
}: MessageProps) {
  const ANIMATION_SPEED = 300
  const springProps = useSpring({
    transform: 'translateX(0)',
    delay: ANIMATION_SPEED * (startIndex + 1),
    from: { transform: `translateX(${position === 'left' ? '-100%' : '100%'})` },
  })

  return (
    <animated.div
      className={
        !images
          ? `shadow-message text-message rounded-message ${
              !price && position === 'left'
                ? 'text-primary-violet-moderate bg-primary-violet-light'
                : !price
                ? 'text-primary-violet-dark bg-secondary-white'
                : 'text-secondary-white gradient-r'
            } ${
              !price
                ? 'px-2 py-message max-w-message'
                : 'w-message-activity grid grid-cols-price gap-2 items-center pl-2 pr-4 py-message-price'
            } ${position === 'left' ? 'rounded-bl-message-small' : 'justify-self-end rounded-br-message-small'} ${
              price && position === 'right' ? 'rtl' : ''
            } ${className}`
          : `grid grid-cols-3 gap-2 ${position === 'right' ? 'justify-self-end rtl' : ''} ${className}`
      }
      style={{ ...springProps, ...style }}
      {...props}
    >
      {!images && price ? (
        <>
          <div className="w-3 h-3 border border-secondary-magenta rounded-full" />
          <div>{children}</div>
          <div className="font-bold text-xs leading-none">${price}</div>
        </>
      ) : !images ? (
        children
      ) : (
        toArray(images).map((image, index) => (
          <img key={index} src={image} alt="" className="w-10 rounded-message shadow-message" />
        ))
      )}
    </animated.div>
  )
}

export default Message
