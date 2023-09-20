import React from "react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen py-4">
      <div className="container mx-auto px-4">
        <div className=" overflow-hidden">
          <div className="py-12 mb-4 text-left">
            <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Dwelling terms of Use
            </h1>
            <p className="text-base text-gray-500 md:text-lg">
              Last updated: 20th Dec 2020
            </p>
          </div>
          <p className="my-4">
            By using this website, you agree to comply with and be bound by the
            following terms and conditions of use. Please read these terms
            carefully before using our services.
          </p>
          <div className="prose prose-lg text-gray-600">
            <h2 className="font-semibold">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to abide by these
              terms and conditions. If you do not agree with any part of these
              terms, please do not use our website.
            </p>

            <h2 className="mt-2 font-semibold">2. User Responsibilities</h2>
            <p>
              - You must be at least 18 years old to use our services.
              <br />
              - You are responsible for maintaining the confidentiality of your
              account and password.
              <br />- You are responsible for all activities that occur under
              your account.
            </p>

            <h2 className="mt-2 font-semibold">3. Booking and Payment</h2>
            <p>
              - All room bookings are subject to availability.
              <br />
              - Prices may vary based on room type, date, and other factors.
              <br />- Payment must be made in advance to confirm your booking.
            </p>
            <h2 className="mt-2 font-semibold">4. Cancellation and Refund</h2>
            <p>
              - Cancellation policies vary based on the room and rate type
              selected.
              <br />- Refunds, if applicable, will be processed according to our
              refund policy.
            </p>
            <h2 className="mt-2 font-semibold">5. Limitation of Liability</h2>
            <p>
              We are not liable for any direct, indirect, incidental, or
              consequential damages arising from the use of our services.
            </p>
            <h2 className="mt-2 font-semibold">6. Privacy Policy</h2>
            <p>
              Please review our{" "}
              <a className="text-blue-700" href="privacypolicy">
                Privacy Policy
              </a>{" "}
              to understand how we collect, use, and protect your personal
              information.
            </p>

            <h2 className="mt-2 font-semibold">7. Limitation of Liability</h2>
            <p>
              We are not liable for any direct, indirect, incidental, or
              consequential damages arising from the use of our services.
            </p>
            <h2 className="mt-2 font-semibold">8. Changes to Terms</h2>
            <p>
              We may update these terms and conditions at any time. It is your
              responsibility to review these terms periodically for changes.
            </p>
            <h2 className="mt-2 font-semibold ">9. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding these terms and
              conditions, please [contact us](/contact).
            </p>
            <h2 className="mt-2 font-semibold">10. Governing Law</h2>
            <p>
              These terms and conditions are governed by the laws of [Your
              Jurisdiction].
              <br /> <br />
              ---
            </p>

            <p className="mt-2 font-semibold">Thanks for using Dwelling</p>
            {/* Include the rest of your terms and conditions content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
