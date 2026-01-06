import React from 'react'

const PrivacyPolicyPage = () => {
  return (
    <div className="dark:text-gray-300 px-6 pt-12">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-3">
            Privacy Policy
          </h1>
          <p className="dark:text-gray-300 text-lg">
            Your privacy matters to Mock News
          </p>
        </header>

        {/* Introduction */}
        <section className="mb-10">
          <p className="dark:text-gray-300 leading-relaxed">
            At <span className="font-medium">Mock News</span>, we
            respect your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard data when you visit our website. This policy is provided
            for demonstration purposes.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <ul className="list-disc list-inside dark:text-gray-300 space-y-2">
            <li>
              Non-personal information such as browser type, device
              information, and pages visited
            </li>
            <li>
              Personal information voluntarily provided through contact forms
              (e.g., name and email address)
            </li>
            <li>
              Cookies and similar technologies used to improve user experience
            </li>
          </ul>
        </section>

        {/* How We Use Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside dark:text-gray-300 space-y-2">
            <li>To operate and maintain the website</li>
            <li>To improve content, performance, and user experience</li>
            <li>To respond to inquiries or feedback</li>
            <li>To monitor usage trends and prevent misuse</li>
          </ul>
        </section>

        {/* Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Cookies
          </h2>
          <p className="dark:text-gray-300 leading-relaxed">
            Mock News may use cookies to store limited information about user
            preferences and optimize the experience by customizing our content
            based on visitors’ browser types or other information.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Data Security
          </h2>
          <p className="dark:text-gray-300 leading-relaxed">
            We take reasonable measures to protect your information. However,
            please note that no method of transmission over the internet or
            electronic storage is completely secure.
          </p>
        </section>

        {/* Third-Party Links */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">
            Third-Party Links
          </h2>
          <p className="dark:text-gray-300 leading-relaxed">
            Mock News may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those external
            sites.
          </p>
        </section>

        {/* Changes */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Policy
          </h2>
          <p className="dark:text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be reflected on this page with an updated revision date.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicyPage