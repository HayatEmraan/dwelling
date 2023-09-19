import React from "react";

export const metadata = {
  title: "Refund & Reschedule Policy",
};

const RefundPage = () => {
  return (
    <section className="container mx-auto px-4">
      <div className="py-12 mb-4 text-left">
        <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
          Refund & Reschedule Policy
        </h1>
        <p className="text-base text-gray-500 md:text-lg">
          Last updated: 20th Dec 2020
        </p>
      </div>
      <div>
        <>
          <p>Thank you for shopping at Dwelling.</p>
          <p>
            If, for any reason, You are not completely satisfied with a purchase
            We invite You to review our policy on refunds or reschedules.
          </p>
          <p>
            The following terms are applicable for any products that You
            purchased with Us.
          </p>
          <h1>Interpretation and Definitions</h1>
          <h2>Interpretation</h2>
          <p>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </p>
          <h2>Definitions</h2>
          <p>For the purposes of this Return & Reschedule Policy:</p>
          <ul className="list-disc pl-5">
            <li>
              <p>
                <strong>Company</strong> (referred to as either "the Company",
                "We", "Us" or "Our" in this Agreement) refers to Dwelling.
              </p>
            </li>
            <li>
              <p>
                <strong>Goods</strong> refer to the items offered for sale on
                the Service.
              </p>
            </li>
            <li>
              <p>
                <strong>Orders</strong> mean a request by You to purchase Goods
                from Us.
              </p>
            </li>
            <li>
              <p>
                <strong>Service</strong> refers to the Website.
              </p>
            </li>
            <li>
              <p>
                <strong>Website</strong> refers to Dwelling, accessible from{" "}
                <a
                  className="text-blue-500 underline"
                  href="https://dwelling-bright.vercel.app/"
                  rel="external nofollow noopener"
                  target="_blank"
                >
                  dwelling, Inc
                </a>
              </p>
            </li>
            <li>
              <p>
                <strong>You</strong> means the individual accessing or using the
                Service, or the company, or other legal entity on behalf of
                which such individual is accessing or using the Service, as
                applicable.
              </p>
            </li>
          </ul>
          <h1 className="mt-3 text-md font-semibold text-gray-900">
            Your Order Refund & Reschedule Rights
          </h1>
          <p>
            You are entitled to refund or reschedule Your Order within 30
            minutes without giving any reason for doing so.
          </p>
          <p>
            The deadline for cancelling an Order is 30 minutes or before
            confirmation from our team the date on which You received or
            completed the payment for the Order.
          </p>
          <p>
            In order to exercise Your right of cancellation, You must inform Us
            of your decision by means of a clear statement. You can inform us of
            your decision by:
          </p>
          <ul>
            <li>
              By visiting this page on our website:{" "}
              <a
                className="text-blue-500 underline"
                href="https://dwelling-bright.vercel.app/"
                rel="external nofollow noopener"
                target="_blank"
              >
                dwelling, Inc
              </a>
            </li>
          </ul>
          <p>
            We will reimburse You no later than 3 - 5 days from the day on which
            We receive refund confirmation. We will use the same means of
            payment as You used for the Order, and You will not incur any fees
            for such reimbursement.
          </p>
          <h2 className="mt-3 text-md font-semibold text-gray-900">
            Contact Us
          </h2>
          <p>
            If you have any questions about our Returns and Reschedule Policy,
            please contact us:
          </p>
        </>
      </div>
    </section>
  );
};

export default RefundPage;
