
import Footer from "@/components/shared/footer/page";
import HeaderComponent from "@/components/shared/header/header";


const Booking = () => {
  return (
    <div className="bg-white">
      <HeaderComponent />
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">

                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">

                  <div className="sm:col-span-1">
                    <div className="relative">
                      <h1 className="text-2xl font-bold text-[#003B95]">Booked</h1>
                      <span>Let's control booking list</span>

                    </div>
                  </div>

                  <div class="hs-dropdown relative inline-block [--placement:bottom-right]" data-hs-dropdown-auto-close="inside">
                    <button id="hs-as-table-table-filter-dropdown" type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                      <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                      </svg>
                      Filter
                      <span class="pl-2 text-xs font-semibold text-blue-600 border-l border-gray-200 dark:border-gray-700 dark:text-blue-500">
                        1
                      </span>
                    </button>
                    <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 divide-y divide-gray-200 min-w-[12rem] z-10 bg-white shadow-md rounded-lg mt-2 dark:divide-gray-700 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-as-table-table-filter-dropdown">
                      <div class="divide-y divide-gray-200 dark:divide-gray-700">
                        <label for="hs-as-filters-dropdown-all" class="flex py-2.5 px-3">
                          <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-all" checked />
                          <span class="ml-3 text-sm text-gray-800 dark:text-gray-200">All</span>
                        </label>
                        <label for="hs-as-filters-dropdown-published" class="flex py-2.5 px-3">
                          <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-published" />
                          <span class="ml-3 text-sm text-gray-800 dark:text-gray-200">Confirm</span>
                        </label>
                        <label for="hs-as-filters-dropdown-pending" class="flex py-2.5 px-3">
                          <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-pending" />
                          <span class="ml-3 text-sm text-gray-800 dark:text-gray-200">Rejected</span>
                        </label>
                      </div>
                    </div>



                  </div>

                </div>



                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-[#003B95] dark:bg-slate-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 dark:text-[#003B95]">
                            Product Name
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 dark:text-[#003B95]">
                            Name
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 dark:text-[#003B95]">
                            E-mail
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 dark:text-[#003B95]">
                            Amount
                          </span>
                        </div>
                      </th>

                      <th scope="col" className="px-6 py-3 text-left">
                        <div className="flex items-center gap-x-2">
                          <span className="text-xs font-semibold uppercase tracking-wide text-gray-300 dark:text-[#003B95]">
                            Status
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <div className="flex items-center gap-x-4">
                            <img className="flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-md" src="https://images.unsplash.com/photo-1691231862377-7e55d4e6a2c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image Description" />
                            <div>
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Luxury Villa Resort</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <div className="flex items-center gap-x-3">
                            <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full" src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Christina Bersh</span>

                            </div>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-72 min-w-[18rem]">
                        <span className="block text-sm text-gray-500">christina@site.com</span>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <span className="text-sm text-gray-600 dark:text-gray-400">$140</span>
                        </a>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            Confirm
                          </span>
                        </a>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <div className="flex items-center gap-x-4">
                            <img className="flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-md" src="https://images.unsplash.com/photo-1691231862377-7e55d4e6a2c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Image Description" />
                            <div>
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Luxury Villa Resort</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <div className="flex items-center gap-x-3">
                            <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Image Description" />
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">David Harrison</span>
                             
                            </div>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-72 min-w-[18rem]">
                      <span className="block text-sm text-gray-500">david@site.com</span>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <span className="text-sm text-gray-600 dark:text-gray-400">$90</span>
                        </a>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                            <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                            </svg>
                            Rejected
                          </span>
                        </a>
                      </td>
                    </tr>

                    <tr className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800">
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <div className="flex items-center gap-x-4">
                            <img className="flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-md" src="https://images.unsplash.com/photo-1670517007659-0f32403f236c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="Image Description" />
                            <div>
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Paradise Hommie</span>
                            </div>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <div className="flex items-center gap-x-3">
                            <span className="inline-flex items-center justify-center h-[2.375rem] w-[2.375rem] rounded-full bg-gray-300 dark:bg-gray-700">
                              <span className="font-medium text-gray-800 leading-none dark:text-gray-200">A</span>
                            </span>
                            <div className="grow">
                              <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Anne Richard</span>
                              
                            </div>
                          </div>
                        </a>
                      </td>
                      <td className="h-px w-72 min-w-[18rem]">
                      <span className="block text-sm text-gray-500">anne@site.com</span>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <span className="text-sm text-gray-600 dark:text-gray-400">$240</span>
                        </a>
                      </td>
                      <td className="h-px w-px whitespace-nowrap">
                        <a className="block h-full p-6" href="#">
                          <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                            <svg className="w-2.5 h-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                            Confirm
                          </span>
                        </a>
                      </td>
                    </tr>

                  </tbody>
                </table>

                <div className="px-6 py-4 grid gap-3 md:flex md:justify-center md:items-center border-t border-gray-200 dark:border-gray-700">
                  
                  <div>
                    <div className="inline-flex gap-x-2">
                      <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
                        </svg>
                        Prev
                      </button>

                      <button type="button" className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                        Next
                        <svg className="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div >

      </div >
      <Footer />
    </div >

  );
};

export default Booking;