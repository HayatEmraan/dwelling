import { AiOutlineUnorderedList } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { VscTarget } from "react-icons/vsc";

const dashboardCards = [
    {
        id: 1,
        title: 'Total Approved Booking',
        icon: <GoProjectSymlink />,
        project_detail: '152',
        completed: 2
    },
    {
        id: 2,
        title: 'Active Booking',
        icon: <AiOutlineUnorderedList />,
        project_detail: 2,
        completed: 28
    },
    {
        id: 3,
        title: 'Pending Booking',
        icon: <FiUsers />,
        project_detail: 22,
        completed: 1
    },
    {
        id: 4,
        title: 'Rejected Booking',
        icon: <VscTarget />,
        project_detail: '32',
        completed: ''
    },
    {
        id: 5,
        title: 'Total Amount Spend',
        icon: <VscTarget />,
        project_detail: '$268.45k',
        completed: 'Discount $15k'
    },
]

const CardContainer = () => {
    return (
        <div className="space-y-6 md:space-y-0  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-between gap-6 items-center">
            {
                dashboardCards.map(({id, title, icon, project_detail, completed})=>{
                    return (
                        <div key={id} className="shadow-md p-4 w-full rounded-md bg-white transition-all hover:-translate-y-1 dark:bg-slate-800 dark:text-white">
                            <div className="flex justify-between items-center">
                                <p className="font-bold">{title}</p>
                                <span className="text-2xl rounded-md bg-[#D0C9FF] text-primary p-2 dark:bg-slate-700 dark:text-white">{icon}</span>
                            </div>
                            <h2 className="text-4xl font-bold pt-5 pb-4">{project_detail}</h2>

                        </div>
                    )
                } )
            }
        </div>
    );
};

export default CardContainer;