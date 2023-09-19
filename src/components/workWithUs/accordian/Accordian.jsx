import React from 'react';

const Accordian = () => {
    return (
        <div className='mx-4 lg:mx-80 '>
            <div className='flex flex-col lg:flex-row  justify-center mx-auto max-w-[100rem]'>
            <div className='w-full dark:invert mx-4 lg:mx-0 lg:w-1/2'>
                <img className='lg:w-9/12' src="Why-best.png" alt="" />
            </div>
            <div className=' px-4  py-4 sm:px-6 lg:px-8 lg:py-14 mx-auto w-full lg:w-1/2'>
            <div className="hs-accordion-group">
                <div className="hs-accordion active" id="hs-basic-with-arrow-heading-one">
                    <button
                        className="hs-accordion-toggle hs-accordion-active:text-red-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-red-500 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-with-arrow-collapse-one"
                    >
                        <svg
                            className="hs-accordion-active:hidden hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        <svg
                            className="hs-accordion-active:block hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        What sets Dwelling apart from other booking platforms?
                    </button>
                    <div
                        id="hs-basic-with-arrow-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-arrow-heading-one"
                    >
                        <p className="text-gray-800 dark:text-gray-200">
                        Dwelling stands out for several compelling reasons. Firstly, our platform offers an expansive global network, providing hosts with exposure to a diverse and extensive pool of potential guests. Additionally, our user-friendly interface simplifies the listing process, making it easy for hosts to showcase their properties effectively. Unlike other platforms, we prioritize the experience of both hosts and guests, ensuring that interactions are seamless and satisfying for all parties involved. This emphasis on user experience sets Dwelling apart as a platform that truly cares about the success and satisfaction of its partners.
                        </p>
                    </div>
                </div>
                <div className="hs-accordion" id="hs-basic-with-arrow-heading-two">
                    <button
                        className="hs-accordion-toggle hs-accordion-active:text-red-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-red-500 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-with-arrow-collapse-two"
                    >
                        <svg
                            className="hs-accordion-active:hidden hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        <svg
                            className="hs-accordion-active:block hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        How does Dwelling ensure the safety and security of hosts and their properties?
                    </button>
                    <div
                        id="hs-basic-with-arrow-collapse-two"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-arrow-heading-two"
                    >
                        <p className="text-gray-800 dark:text-gray-200">
                        At Dwelling, security is paramount. We implement a multi-layered approach to ensure the safety of both hosts and their properties. Our verification processes are rigorous, encompassing thorough background checks for both hosts and guests. Additionally, all financial transactions are conducted through highly secure channels, employing advanced encryption protocols to safeguard sensitive information. By prioritizing security measures, Dwelling provides hosts with the peace of mind they need to open their homes to guests, knowing that their property and personal information are in trustworthy hands.
                        </p>
                    </div>
                </div>
                <div className="hs-accordion" id="hs-basic-with-arrow-heading-three">
                    <button
                        className="hs-accordion-toggle hs-accordion-active:text-red-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-red-500 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-with-arrow-collapse-three"
                    >
                        <svg
                            className="hs-accordion-active:hidden hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        <svg
                            className="hs-accordion-active:block hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        Can Dwelling help me optimize my listing for maximum visibility and bookings?
                    </button>
                    <div
                        id="hs-basic-with-arrow-collapse-three"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-arrow-heading-three"
                    >
                        <p className="text-gray-800 dark:text-gray-200">
                        Absolutely! Dwelling is committed to empowering hosts with the tools and resources they need to succeed. We offer professional photography services, ensuring that your property is presented in the best possible light. Furthermore, our platform provides comprehensive guidance on how to optimize your listing, including tips on writing compelling descriptions, setting competitive pricing, and utilizing eye-catching visuals. These resources are designed to help your property stand out in a crowded marketplace, attracting more potential guests and ultimately leading to higher booking rates.
                        </p>
                    </div>
                </div>
                <div className="hs-accordion" id="hs-basic-with-arrow-heading-three">
                    <button
                        className="hs-accordion-toggle hs-accordion-active:text-red-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-red-500 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-with-arrow-collapse-three"
                    >
                        <svg
                            className="hs-accordion-active:hidden hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        <svg
                            className="hs-accordion-active:block hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        What support and resources does Dwelling provide to its partners?
                    </button>
                    <div
                        id="hs-basic-with-arrow-collapse-three"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-arrow-heading-three"
                    >
                        <p className="text-gray-800 dark:text-gray-200">
                        Dwelling believes in providing hosts with the support and resources they need to thrive. Our dedicated support team is available 24/7 to assist with any inquiries or issues that may arise. In addition to personalized support, we offer a wealth of resources through our host dashboard. This includes tips and best practices for successful hosting, as well as insights on providing an exceptional guest experience. Our goal is to equip hosts with the knowledge and tools they need to excel in the short-term rental market, ensuring a fulfilling and profitable hosting experience.
                        </p>
                    </div>
                </div>
                <div className="hs-accordion" id="hs-basic-with-arrow-heading-three">
                    <button
                        className="hs-accordion-toggle hs-accordion-active:text-red-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-red-500 dark:text-gray-200 dark:hover:text-gray-400"
                        aria-controls="hs-basic-with-arrow-collapse-three"
                    >
                        <svg
                            className="hs-accordion-active:hidden hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        <svg
                            className="hs-accordion-active:block hs-accordion-active:text-red-600 hs-accordion-active:group-hover:text-red-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                            />
                        </svg>
                        How does Dwelling contribute to a sense of community among its partners?
                    </button>
                    <div
                        id="hs-basic-with-arrow-collapse-three"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-basic-with-arrow-heading-three"
                    >
                        <p className="text-gray-800 dark:text-gray-200">
                        Dwelling believes that hosting should be a collaborative and enriching experience. To foster this sense of community, we organize events, forums, and networking opportunities that allow hosts to connect, share experiences, and exchange valuable insights. Our platform serves as more than just a booking site; it's a vibrant community of like-minded hosts who understand the unique challenges and rewards of hosting. By facilitating these connections, Dwelling empowers hosts to learn from one another and grow together in this dynamic industry.
                        </p>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </div>
    );
};

export default Accordian;
