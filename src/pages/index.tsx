import React from 'react'
import Seo from '@/components/Seo'
import Chat from '@/components/Chat'
import Message from '@/components/Message'
import avatar from '@/images/avatar.jpg'
import dogImage1 from '@/images/dog-image-1.jpg'
import dogImage2 from '@/images/dog-image-2.jpg'
import dogImage3 from '@/images/dog-image-3.jpg'

function IndexPage() {
  return (
    <div className="relative overflow-hidden">
      <Seo title="Frontend Mentor: Chat app CSS illustration" />
      <div className="absolute -top-128 -left-80 md:-top-80 md:-left-24 w-bg h-bg gradient-l rounded-full" />
      <div className="absolute -bottom-128 -right-80 md:-bottom-80 md:-right-44 w-bg h-bg gradient-l rounded-full opacity-3" />
      <main className="min-h-screen py-16 px-8 relative z-10 grid md:grid-cols-2 gap-16 lg:gap-0 justify-items-center items-center">
        <section className="lg:mr-28 px-8 lg:justify-self-end">
          <Chat avatar={avatar} name="Samuel Green" status="Available to Walk">
            <Chat.Me>
              <Message>That sounds great. I’d be happy with that.</Message>
              <Message>Could you send over some pictures of your dog, please?</Message>
            </Chat.Me>
            <Chat.You>
              <Message images={[dogImage1, dogImage2, dogImage3]} />
              <Message>Here are a few pictures. She’s a happy girl!</Message>
              <Message>Can you make it?</Message>
            </Chat.You>
            <Chat.Me>
              <Message>She looks so happy! The time we discussed works. How long shall I take her out for?</Message>
              <Message price={29}>30 minute walk</Message>
              <Message price={49}>1 hour walk</Message>
            </Chat.Me>
          </Chat>
        </section>
        <section className="max-w-md lg:ml-3 text-center md:text-left lg:justify-self-start">
          <h1 className="mb-6 text-primary-violet-darkest text-heading font-medium">Simple booking</h1>
          <p>
            Stay in touch with our dog walkers through the chat interface. This makes it easy to discuss arrangements
            and make bookings. Once the walk has been completed you can rate your walker and book again all through the
            chat.
          </p>
        </section>
      </main>
    </div>
  )
}

export default IndexPage
