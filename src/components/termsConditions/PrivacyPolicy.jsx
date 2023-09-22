import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="px-4 container mx-auto">
      <div className="py-12 mb-4 text-left">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Privacy Policy
        </h1>
        <p className="text-base text-gray-500 md:text-lg">
          Last updated: 20th Dec 2020
        </p>
      </div>
      <section>
        <h2 className="text-lg font-semibold mb-2">
          Information Collection and Use
        </h2>
        <p>
          <strong>Personal Information</strong>: We may collect personal
          information, such as your name, email address, phone number, and
          payment details, to process room bookings and provide our services.
        </p>
        <p>
          <strong>Usage Data</strong>: We may collect usage data, including your
          interactions with our platform, IP address, device information, and
          browsing history, to improve our services and user experience.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold my-2">Information Sharing</h2>
        <p>
          We may share your personal information with third parties to process
          payments, provide customer support, and improve our services.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold my-2">Security</h2>
        <p>
          We prioritize the security of your personal information and use
          industry-standard measures to protect it.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold my-2">
          Changes to this Privacy Policy
        </h2>
        <p>
          We reserve the right to update this Privacy Policy. Any changes will
          be posted on this page.
        </p>
      </section>
      <section>
        <h2 className="text-lg font-semibold my-2">Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at @dwelling.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
