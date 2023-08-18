import React from 'react';
import {RiDeleteBinLine} from "react-icons/ri";



const tableData = [
   { id: 1,
    invoices:"#88120",
    status:"paid",
    customerInfo:"William Shakespeare ",
    date:"23/12/2023",
    email:"shakespeare13@gmail.com",
    amount:"$35",
    action:<RiDeleteBinLine/>,
    image:"https://i.ibb.co/LrMGpmN/istockphoto-1352761377-612x612.jpg"
   },
  
   { id: 2,
    invoices:"#88130",
    status:"paid",
    customerInfo:"Lord Byron ",
    date:"21/2/2023",
    email:"byron13@gmail.com",
    amount:"$40",
    action:<RiDeleteBinLine/>,
    image:"https://i.ibb.co/qdBNcYs/istockphoto-1469732260-612x612.jpg"
   },
  
   {
    id: 3,
    invoices:"#88140",
    status:"unpaid",
    customerInfo:"William jennese ",
    date:"13/11/2023",
    email:"jennese13@gmail.com",
    amount:"$35",
    action:<RiDeleteBinLine/>,
    image:"https://i.ibb.co/VMk1CZQ/images.jpg"
   },
  
   {
    id: 4,
    invoices:"#88120",
    status:"paid",
    customerInfo:"William Blake ",
    date:"14/9/2023",
    email:"blake13@gmail.com",
    amount:"$76",
    action:<RiDeleteBinLine/>,
    image:"https://i.ibb.co/5G5TMzf/istockphoto-1469855510-612x612.jpg"
   },
  
   {
    id: 5,
    invoices:"#88150",
    status:"paid",
    customerInfo:"pb Shaly",
    date:"26/12/2023",
    email:"shaly13@gmail.com",
    amount:"$45",
    action:<RiDeleteBinLine/>,
    image:"https://i.ibb.co/z4yTn0R/istockphoto-1469855526-612x612.jpg"
   },
  
]




const Table = () => {
    return (
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Invoices</th>
        <th>Image</th>
        <th>Status</th>
        <th>Customer Info</th>
        <th>Date</th>
        <th>Email</th>
        <th>Amount</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
              tableData.map(({id, invoices, status, customerInfo, date,email,amount,action,image})=>{
                return(
                  <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                  <div>{invoices}</div>
                  </td>
                  <td>
                  
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={image} />
                        </div>
                      </div>
                     
                    </div>
                  </td>
                  <td>{status}</td>
                  <td>
                  {customerInfo}
                  
                  </td>
                  <td>{date}</td>
                  <td>{email}</td>
                  <td>{amount}</td>
                  <td className="text-2xl text-[#eb5555] ">{action}</td>
               
                </tr>
                )

        })
      }

    </tbody>
  </table>
</div>


    );
};

export default Table;