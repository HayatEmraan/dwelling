import React from "react";

function InvoiceDownload() {
  return (
    <div className="container mx-auto w-11/12 mt-10">
      <div className="flex items-center justify-between">
        <div className="p-6">
          <h1 className="text-3xl font-bold">
            Invoice <small className="text-gray-500">With Credit</small>
          </h1>
          <h4 className="text-sm text-gray-500">
            NO: 554775/R1 | Date: 01/01/2015
          </h4>
        </div>
        <div className="flex items-center p-6">
          <div className="ml-6">
            <p className="font-bold">Dwelling, Inc.</p>
            <p>Roommate Finder</p>
            <p>@dwelling</p>
          </div>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h3 className="text-xl font-semibold">Company Details</h3>
            </div>
            <div className="p-4">
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <div className="col-span-1 font-bold">Name:</div>
                <div className="col-span-1">Acme Corporation</div>
                <div className="col-span-1 font-bold">Industry:</div>
                <div className="col-span-1">Software Development</div>
                <div className="col-span-1 font-bold">Address:</div>
                <div className="col-span-1">Field 3, Moon</div>
                <div className="col-span-1 font-bold">Phone:</div>
                <div className="col-span-1">123.4456.4567</div>
                <div className="col-span-1 font-bold">Email:</div>
                <div className="col-span-1">mainl@acme.com</div>
                <div className="col-span-1 font-bold">Tax NO:</div>
                <div className="col-span-1">123456789</div>
                <div className="col-span-1 font-bold">Tax Office:</div>
                <div className="col-span-1">A' Moon</div>
              </dl>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md">
            <div className="p-4 border-b">
              <h3 className="text-xl font-semibold">Customer Details</h3>
            </div>
            <div className="p-4">
              <dl className="grid grid-cols-2 gap-2 text-sm">
                <div className="col-span-1 font-bold">Name:</div>
                <div className="col-span-1">Microsoft Corporation</div>
                <div className="col-span-1 font-bold">Industry:</div>
                <div className="col-span-1">Software Development</div>
                <div className="col-span-1 font-bold">Address:</div>
                <div className="col-span-1">
                  One Microsoft Way Redmond, WA 98052-7329, USA
                </div>
                <div className="col-span-1 font-bold">Phone:</div>
                <div className="col-span-1">(425) 882-8080</div>
                <div className="col-span-1 font-bold">Email:</div>
                <div className="col-span-1">contact@microsoft.com</div>
                <div className="col-span-1 font-bold">Tax NO:</div>
                <div className="col-span-1">123456789</div>
              </dl>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md mt-8">
          <div className="p-4 border-b">
            <h3 className="text-xl font-semibold">Services / Products</h3>
          </div>
          <table className="w-full table-fixed">
            <thead>
              <tr>
                <th className="w-1/5">Item / Details</th>
                <th className="w-1/6 text-center">Unit Cost</th>
                <th className="w-1/6 text-center">Sum Cost</th>
                <th className="w-1/6 text-center">Discount</th>
                <th className="w-1/6 text-center">Tax</th>
                <th className="w-1/6 text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Lorem Ipsum Dolor
                  <br />
                  <small className="text-gray-500">
                    The best lorem in town, try it now or leave forever
                  </small>
                </td>
                <td className="text-right">
                  <span className="font-mono">$1,000.00</span>
                  <br />
                  <small className="text-gray-500">Before Tax</small>
                </td>
                <td className="text-right">
                  <span className="font-mono">$18,000.00</span>
                  <br />
                  <small className="text-gray-500">18 Units</small>
                </td>
                <td className="text-right">
                  <span className="font-mono">- $1,800.00</span>
                  <br />
                  <small className="text-gray-500">Special -10%</small>
                </td>
                <td className="text-right">
                  <span className="font-mono">+ $3,240.00</span>
                  <br />
                  <small className="text-gray-500">VAT 20%</small>
                </td>
                <td className="text-right">
                  <strong className="font-mono">$19,440.00</strong>
                  <br />
                  <small className="font-mono text-gray-500">$16,200.00</small>
                </td>
              </tr>
              <tr>
                <td>
                  Sit Amet Dolo
                  <br />
                  <small className="text-gray-500">Now you may sit</small>
                </td>
                <td className="text-right">
                  <span className="font-mono">$120.00</span>
                  <br />
                  <small className="text-gray-500">Before Tax</small>
                </td>
                <td className="text-right">
                  <span className="font-mono">$240.00</span>
                  <br />
                  <small className="text-gray-500">2 Units</small>
                </td>
                <td className="text-right">
                  <span className="font-mono">- $0.00</span>
                  <br />
                  <small className="text-gray-500">-</small>
                </td>
                <td className="text-right">
                  <span className="font-mono">+ $72.00</span>
                  <br />
                  <small className="text-gray-500">VAT: 20% S: 10%</small>
                </td>
                <td className="text-right">
                  <strong className="font-mono">$312.00</strong>
                  <br />
                  <small className="font-mono text-gray-500">$240.00</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow-md mt-8">
          <table className="w-full table-fixed">
            <thead>
              <tr>
                <td className="w-1/5 text-center">Sub Total</td>
                <td className="w-1/5 text-center">Discount</td>
                <td className="w-1/5 text-center">Total</td>
                <td className="w-1/5 text-center">Tax</td>
                <td className="w-1/5 text-center">Final</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-center font-mono">18,240.00</th>
                <th className="text-center font-mono">-1,800.00</th>
                <th className="text-center font-mono">16,440.00</th>
                <th className="text-center font-mono">3,312.00</th>
                <th className="text-center font-mono">19,752.00</th>
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
