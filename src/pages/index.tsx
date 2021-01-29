import React, { useRef } from 'react'
import { useSprings, useSpring, useChain, animated } from 'react-spring'
import Seo from '@/components/Seo'
import Chat from '@/components/Chat'
import Message, { MessageProps } from '@/components/Message'
import avatar from '@/images/avatar.jpg'
import dogImage1 from '@/images/dog-image-1.jpg'
import dogImage2 from '@/images/dog-image-2.jpg'
import dogImage3 from '@/images/dog-image-3.jpg'

interface MessageGroup {
  position: 'left' | 'right'
  messages: MessageProps[]
}

const getStartIndex = (messageGroups: MessageGroup[], groupIndex: number) =>
  messageGroups.reduce((acc, group, index) => (index < groupIndex ? acc + group.messages.length : acc), 0)

const messageGroups: MessageGroup[] = [
  {
    position: 'left',
    messages: [
      { children: 'That sounds great. I’d be happy with that.' },
      { children: 'Could you send over some pictures of your dog, please?' },
    ],
  },
  {
    position: 'right',
    messages: [
      { images: [dogImage1, dogImage2, dogImage3] },
      { children: 'Here are a few pictures. She’s a happy girl!' },
      { children: 'Can you make it?' },
    ],
  },
  {
    position: 'left',
    messages: [
      { children: 'She looks so happy! The time we discussed works. How long shall I take her out for?' },
      { children: '30 minute walk', price: 29 },
      { children: '1 hour walk', price: 49 },
    ],
  },
]

function IndexPage() {
  const SECTIONS_ANIMATION_SPEED = 500
  const MESSAGES_ANIMATION_SPEED = 300
  const PATTERNS_ANIMATION_SPEED = 300

  const leftSectionRef = useRef(null)
  const leftSectionSpringProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: SECTIONS_ANIMATION_SPEED },
    ref: leftSectionRef,
  })

  const rightSectionRef = useRef(null)
  const rightSectionSpringProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: SECTIONS_ANIMATION_SPEED },
    ref: rightSectionRef,
  })

  const messagesCount = messageGroups.reduce((acc, group) => acc + group.messages.length, 0)
  const lastMessageRef = useRef(null)
  const messageSprings = useSprings(
    messagesCount,
    messageGroups.flatMap((group, groupIndex) => {
      const { position, messages } = group
      const startIndex = getStartIndex(messageGroups, groupIndex)
      return messages.map((_, messageIndex) => ({
        transform: 'translateX(0)',
        from: { transform: `translateX(${position === 'left' ? '-' : ''}100%)` },
        config: { duration: MESSAGES_ANIMATION_SPEED },
        delay: (startIndex + messageIndex) * MESSAGES_ANIMATION_SPEED + SECTIONS_ANIMATION_SPEED,
        ref: startIndex + messageIndex === messagesCount - 1 ? lastMessageRef : undefined,
      }))
    })
  )
  const AnimatedMessage = animated(Message)

  const topPatternRef = useRef(null)
  const topPatternSpringProps = useSpring({
    transform: 'translateY(0)',
    from: { transform: 'translateY(-100%)' },
    config: { duration: PATTERNS_ANIMATION_SPEED },
    ref: topPatternRef,
  })

  const bottomPatternRef = useRef(null)
  const bottomPatternSpringProps = useSpring({
    transform: 'translateY(0)',
    from: { transform: 'translateY(100%)' },
    config: { duration: PATTERNS_ANIMATION_SPEED },
    ref: bottomPatternRef,
  })

  const messagesStartTime = SECTIONS_ANIMATION_SPEED / 1000
  const patternsStartTime = (SECTIONS_ANIMATION_SPEED + MESSAGES_ANIMATION_SPEED * messagesCount) / 1000
  useChain(
    [leftSectionRef, rightSectionRef, lastMessageRef, topPatternRef, bottomPatternRef],
    [0, 0, messagesStartTime, patternsStartTime, patternsStartTime]
  )

  return (
    <div className="relative overflow-hidden">
      <Seo title="Frontend Mentor: Chat app CSS illustration" />
      <animated.div
        className="absolute -top-128 -left-80 md:-top-80 md:-left-24 w-bg h-bg gradient-l rounded-full"
        style={topPatternSpringProps}
      />
      <animated.div
        className="absolute -bottom-128 -right-80 md:-bottom-80 md:-right-44 w-bg h-bg gradient-l rounded-full opacity-3"
        style={bottomPatternSpringProps}
      />
      <main className="min-h-screen py-16 px-8 relative z-10 grid md:grid-cols-2 gap-16 lg:gap-0 justify-items-center items-center">
        <animated.section className="lg:mr-28 px-8 lg:justify-self-end" style={leftSectionSpringProps}>
          <Chat avatar={avatar} name="Samuel Green" status="Available to Walk">
            {messageGroups.map((group, groupIndex) => (
              <Chat.Group key={groupIndex} position={group.position}>
                {group.messages.map((message, messageIndex) => (
                  <AnimatedMessage
                    key={messageIndex}
                    {...message}
                    style={messageSprings[getStartIndex(messageGroups, groupIndex) + messageIndex]}
                  />
                ))}
              </Chat.Group>
            ))}
          </Chat>
        </animated.section>
        <animated.section
          className="max-w-md lg:ml-3 text-center md:text-left lg:justify-self-start"
          style={rightSectionSpringProps}
        >
          <h1 className="mb-6 text-primary-violet-darkest text-heading font-medium">Simple booking</h1>
          <p>
            Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements
            and make bookings. Once the walk has been completed you can rate your walker and book again all through the
            chat.
          </p>
        </animated.section>
      </main>
    </div>
  )
}

export default IndexPage
