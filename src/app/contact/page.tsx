import { Button } from '@/components/ui/button'
import React from 'react'

const ContactPage = () => {
  return (
    <div className="dark:text-gray-300 px-6 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3">
            Contact Mock News
          </h1>
          <p className="dark:text-gray-300 text-lg">
            We’d love to hear from you
          </p>
        </header>

        {/* Contact Info */}
        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h2>
            <p className="dark:text-gray-300 mb-6 leading-relaxed">
              Have feedback, questions, or story suggestions? Reach out to us
              using the contact details below. This information is provided
              for demonstration purposes only.
            </p>

            <ul className="space-y-4 dark:text-gray-300">
              <li>
                <span className="font-medium">Email:</span>{" "}
                contact@mocknews.com
              </li>
              <li>
                <span className="font-medium">Phone:</span>{" "}
                +1 (000) 123-4567
              </li>
              <li>
                <span className="font-medium">Address:</span>{" "}
                123 Demo Street, News City, NY 10001
              </li>
              <li>
                <span className="font-medium">Office Hours:</span>{" "}
                Mon – Fri, 9:00 AM – 5:00 PM
              </li>
            </ul>
          </div>

          {/* Demo Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Send a Message
            </h2>

            <form className="space-y-2 md:space-y-5">
              <div>
                <label className="block text-sm dark:text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md  border border-gray-800 px-4 py-2 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm dark:text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-md  border border-gray-800 px-4 py-2 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                />
              </div>

              <div>
                <label className="block text-sm dark:text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your message"
                  className="w-full rounded-md  border border-gray-800 px-4 py-2 dark:text-gray-300 focus:outline-none focus:border-gray-600"
                />
              </div>

              <Button type="submit" className='w-full' variant="default">Send Message</Button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              * This form is for demo purposes only and does not submit data.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactPage