import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdPermIdentity } from 'react-icons/md';
import './PartnerRegisterModal.css'


// Lets Dwelling Partner

const PartnerRegisterModal = () => {
    return (
      <>
        <button
          type="button"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800 [--overlay-backdrop:static]"
          data-hs-overlay="#hs-static"
        >
          Let's Dwelling Partner
        </button>
        <div
          id="hs-static"
          className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
          data-hs-overlay-keyboard="false"
        >
          <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all lg:max-w-4xl lg:w-full m-3 lg:mx-auto">
            <div className="flex flex-col  bg-white shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
              <div className="flex relative justify-end items-center">
                <button
                  type="button"
                  className="hs-dropdown-toggle absolute top-3 z-40 right-3 inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-red-500 hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                  data-hs-overlay="#hs-static"
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="w-3.5 h-3.5"
                    width={8}
                    height={8}
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
              <div className=" overflow-y-auto">
                <section className="relative flex flex-wrap lg:h-[75vh] lg:items-center">
                  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                      <h1 className="text-2xl font-bold sm:text-3xl">
                        Partnership with{" "}
                        <span className="text-red-500 uppercase">
                          Dwelling!
                        </span>{" "}
                      </h1>
                      <p className="mt-4 text-gray-500">
                        Join us for Immediate Benefits! With Dwelling, you'll
                        experience rapid exposure, higher earnings, streamlined
                        management, and a supportive community. Don't miss out,
                        partner with us today!
                      </p>
                    </div>
                    <form
                      action=""
                      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
                    >
                      <div>
                        <label htmlFor="name" className="sr-only">
                          Name
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            className="w-full rounded-lg border border-gray-200 focus:border-gray-600 focus:outline-none p-4 pe-12 text-sm shadow-sm"
                            placeholder="Your Name"
                          />
                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <MdPermIdentity className="text-gray-400" />
                          </span>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email" className="sr-only">
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            className="w-full rounded-lg border border-gray-200 focus:border-gray-600 focus:outline-none p-4 pe-12 text-sm shadow-sm"
                            placeholder="Your Email"
                          />
                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 text-gray-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="number" className="sr-only">
                          Phone Number
                        </label>
                        <div className="relative">
                          <input
                            type="number"
                            className="w-full rounded-lg border border-gray-200 focus:border-gray-600 focus:outline-none p-4 pe-12 text-sm shadow-sm"
                            placeholder="Phone Number"
                          />
                          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <BsFillTelephoneFill className="text-gray-400" />
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          type="submit"
                          className="inline-block rounded-lg bg-red-500 px-5 py-3 text-sm font-medium text-white"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
                    <img
                      alt="Welcome"
                      src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      className="absolute inset-0 h-full w-full object-cover rounded-e-xl"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default PartnerRegisterModal;