import React from "react";

function InvoiceDownload() {
  return (
    <div className="container mx-auto w-11/12 mt-10">
      <div className="flex items-center justify-between rounded">
        <div className="p-6 mt-2 mb-2  rounded">
          <h1 className="text-3xl font-bold text-gray-500">
            Invoice <small className="text-gray-500">With Credit</small>
          </h1>
          <h4 className="text-sm text-gray-500">
            NO: 554775/R1 | Date: 03/09/2023
          </h4>
        </div>
        <div className="flex items-center ">
          <div className="rounded ">
            <p className="font-bold text-lg">Dwelling, Inc.</p>
            <p className="text-xl text-gray-500 font-bold">
              {" "}
              Flat / Roommate Finder
            </p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b">
              <h3 className="text-xl font-semibold rounded text-center bg-slate-300 ">
                Company Details
              </h3>
            </div>
            <div className="p-4">
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <div className="col-span-1 font-bold">Name:</div>
                <div className="col-span-1">Dwelling</div>
                <div className="col-span-1 font-bold">Industry:</div>
                <div className="col-span-1">Roommate Finder</div>
                <div className="col-span-1 font-bold">Address:</div>
                <div className="col-span-1">23 chandgao ,Chittagong</div>
                <div className="col-span-1 font-bold">Phone:</div>
                <div className="col-span-1">123.4456.4567</div>
                <div className="col-span-1 font-bold">Email:</div>
                <div className="col-span-1">
                  {"john.doe07@gmail.com".replace(
                    /^(.{3}).*?(?=@)/,
                    (_, firstThreeChars) => firstThreeChars + "*".repeat(5)
                  )}
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="border-b">
              <h3 className="text-xl font-semibold text-center rounded bg-slate-300">
                Customer Details
              </h3>
            </div>
            <div className="p-4">
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <div className="col-span-1 font-bold">Name:</div>
                <div className="col-span-1">John Doe</div>
                <div className="col-span-1 font-bold">Address:</div>
                <div className="col-span-1">12bonani, Dhaka</div>
                <div className="col-span-1 font-bold">Phone:</div>
                <div className="col-span-1">(425) 882-8080</div>
                <div className="col-span-1 font-bold">Email:</div>
                <div className="col-span-1">
                  {"emraanhasan.doe07@gmail.com".replace(
                    /^(.{3}).*?(?=@)/,
                    (_, firstThreeChars) => firstThreeChars + "*".repeat(5)
                  )}
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md mt-8">
          <div className="pb-4 border-b">
            <h3 className="text-2xl font-semibold w-full bg-slate-300 text-center rounded p-2">
              Booking Details{" "}
            </h3>
          </div>
          <table className="w-full table-fixed text-center">
            <thead className=" m-12 border bg-slate-300">
              <tr className="">
                <th className="w-1/6 text-center p-2">Name</th>
                <th className="w-1/6">Details</th>
                <th className="w-1/6 text-center">Address</th>
                <th className="w-1/6 text-center">Check-in</th>
                <th className="w-1/6 text-center">Check-out</th>
                <th className="w-1/6 text-center"> Nights</th>
                <th className="w-1/6 text-center">Guest</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="pt-3 ">{"Luxury Villa".slice(0, 6)}</td>
                <td className="text-center m-3 pt-3 ">
                  <span className="font-mono ">First Class</span>
                </td>
                <td className="text-center pt-3 ">
                  <span className="font-mono">Dhaka</span>
                </td>
                <td className="text-center pt-3 ">
                  <span className="font-mono"> 1/5/2023</span>
                </td>
                <td className="text-center pt-3 ">
                  <span className="font-mono">5/5/2023</span>
                </td>
                <td className="text-center pt-3 ">
                  <strong className="font-mono">6</strong>
                </td>
                <td className="text-center pt-3 ">
                  <strong className="font-mono">6</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-md mt-8">
          <div className=" pb-4 border-b">
            <h3 className="text-2xl font-semibold bg-slate-300 text-center rounded p-2 ">
              Payment
            </h3>
          </div>
          <table className="w-full text-center">
            <thead className="m-9">
              <tr className="bg-slate-300 rounded">
                <th className="w-1/5 text-center pt-3 ">Name</th>
                <th className="w-1/5 text-center">Daily Cost</th>
                <th className="w-1/5 text-center">Sum Cost</th>
                <th className="w-1/5 text-center">Discount</th>
                <th className="w-1/5 text-center">Tax</th>
      
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-3 text-center">
                  {"Luxury Villa".slice(0, 6)}
                </td>
                <td className="text-center pt-3 ">
                  <span className="font-mono">$1,000.00</span>
                </td>
                <td className="text-center  pt-3 ">
                  <span className="font-mono">$18,000.00</span>
                </td>
                <td className="text-center  pt-3 ">$2,000.00</td>
                <td className="text-center pt-3 ">
                  <span className="font-mono"> $3,000.00</span>
                </td>
             
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-md mt-8">
          <div className="pb-4 border-b">
            <h3 className="text-2xl font-semibold bg-slate-300 text-center rounded p-2 ">
              Payment Information
            </h3>
          </div>
          <table className="table-fixed">
            <thead className="">
              <tr className="bg-slate-300 rounded ">
                <th className=" w-full text-left pl-10 pt-3 ">Name</th>
                <th className=" w-full text-center mr-5 ">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pl-10 pt-2">Payment Method</td>
                <td className="text-center ">
                  <span className="font-mono">Bank</span>
                </td>
              </tr>
              <tr>
                <td className="pl-10  ">Bank Name</td>
                <td className="text-right">
                  <span className="font-mono whitespace-nowrap">
                    Bangladesh Bank
                  </span>
                </td>
              </tr>
              <tr>
                <td className="pl-10">Account Number</td>
                <td className="text-center ">
                  <span className="font-mono">12345678986</span>
                </td>
              </tr>
              <tr>
                <td className="pl-10 ">Total Price</td>
                <td className="text-center ">
                  <span className="font-mono">$20,000.00</span>
                </td>
              </tr>
              <tr>
                <td className="pl-10  ">Dew</td>
                <td className="text-center  ">
                  <span className="font-mono">$10,000.00</span>
                </td>
              </tr>
              <tr>
                <td className="pl-10">Paid</td>
                <td className="text-center ">
                  <span className="font-mono">$10,000.00</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 p-4 text-center text-gray-500">
        Thank you for choosing our services.
        <br /> We hope to see you again soon
        <br />
        <strong>~dwelling~</strong>
      </div>
    </div>
  );
}

export default InvoiceDownload;
