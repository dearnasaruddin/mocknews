import React from 'react'

const AboutPage = () => {
  return (
    <div className="px-6 pt-12 pb-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl dark:text-gray-300 font-bold mb-3">
            About Mock News
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Your trusted source for category-driven, up-to-date news
          </p>
        </header>

        {/* Who We Are */}
        <section className="mb-10">
          <h2 className="text-2xl dark:text-gray-300 font-semibold  mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            <span className=" font-medium">Mock News</span> is a
            digital news platform built to deliver the latest stories across
            multiple domains. We focus on clarity, relevance, and accessibility,
            helping readers stay informed without unnecessary noise.
          </p>
        </section>

        {/* Categories */}
        <section className="mb-10">
          <h2 className="text-2xl dark:text-gray-300 font-semibold  mb-4">
            What We Cover
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 dark:text-gray-300">
            <li>Science & Innovation</li>
            <li>Finance & Business</li>
            <li>Technology</li>
            <li>Environment & Climate</li>
            <li>Lifestyle</li>
            <li>Cybersecurity</li>
            <li>Sports</li>
            <li>Arts</li>
            <li>Food Science</li>
          </ul>
        </section>

        {/* Mission */}
        <section className="mb-10">
          <h2 className="text-2xl dark:text-gray-300 font-semibold  mb-4">
            Our Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Our mission is to simplify the way news is consumed. By organizing
            stories into clear categories, Mock News allows readers to quickly
            discover topics they care about while maintaining accuracy and
            neutrality.
          </p>
        </section>

        {/* Why Mock News */}
        <section>
          <h2 className="text-2xl dark:text-gray-300 font-semibold mb-4">
            Why Mock News?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Designed with performance and usability in mind, Mock News provides
            a clean and distraction-free reading experience.
          </p>
        </section>
      </div>
    </div>
  )
}

export default AboutPage