import React from 'react'
import Seo from '@/components/Seo'
import Chat from '@/components/Chat'

function IndexPage() {
  return (
    <div className="relative min-h-screen py-16 px-8 overflow-hidden">
      <Seo title="Frontend Mentor: Chat app CSS illustration" />
      <div className="absolute -top-128 -left-80 md:-top-80 md:-left-24 w-bg h-bg gradient rounded-full" />
      <div className="absolute -bottom-128 -right-80 md:-bottom-80 md:-right-44 w-bg h-bg gradient rounded-full opacity-3" />
      <main className="relative z-10 grid md:grid-cols-2 gap-16 lg:gap-0 justify-items-center items-center">
        <section className="lg:mr-28 px-8 lg:justify-self-end">
          <Chat>Hi!</Chat>
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
