import React from "react";
import { FiUsers } from "react-icons/fi";
import {BsFileEarmarkText} from  "react-icons/bs";
import {GiSelfLove} from  "react-icons/gi";
import {SiPayoneer} from  "react-icons/si";


const dashboardCards = [
    {
        id: 1,
        title: 'Clients',
        icon: <FiUsers />,
        project_detail: 18,
        completed: 2,
        clientPercentage:+9.18,
        amount:3156
    },
    {
        id: 2,
        title: 'Invoices',
        icon: <BsFileEarmarkText />,
        project_detail: 132,
        completed: 28,
        clientPercentage:-3.18,
        amount:167
    },
    {
        id: 3,
        title: 'Sent Invoice',
        icon: <GiSelfLove/>,
        project_detail: 12,
        completed: 1,
        clientPercentage:+183,
        amount:41.56
    },
    {
        id: 4,
        title: 'Paid',
        icon: <SiPayoneer />,
        project_detail: '75%',
        completed: '5%',
        clientPercentage:+6.18,
        amount:33.16
    },
]







const InvoiceListPage = () => {
  return (

    <div className="flex justify-between gap-6 items-center p-4">
        
    {
        dashboardCards.map(({id, title, icon, project_detail, completed ,clientPercentage, amount})=>{
            return (
                <div key={id} className="shadow-md p-4 w-full rounded-md bg-white transition-all hover:-translate-y-1">
                    <div className="flex justify-between items-center">
                    <span className="text-2xl rounded-md bg-[#e1c38f] text-[#706f6e] p-2">{icon}</span>
                        <span className="rounded-md text-[#5d91eb] -2">{clientPercentage}%</span>
                    </div>
                      <p className="font-bold">{title}</p>
                    <h2 className="text-4xl font-bold pt-5 pb-4">{amount}</h2>
                </div>
            )
        } )
    }
</div>



  );
};

export default InvoiceListPage;
