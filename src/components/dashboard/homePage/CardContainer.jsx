import { AiOutlineUnorderedList } from "react-icons/ai";
import { GoProjectSymlink } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { VscTarget } from "react-icons/vsc";

const dashboardCards = [
    {
        id: 1,
        title: 'Projects',
        icon: <GoProjectSymlink />,
        project_detail: 18,
        completed: 2
    },
    {
        id: 2,
        title: 'Active Task',
        icon: <AiOutlineUnorderedList />,
        project_detail: 132,
        completed: 28
    },
    {
        id: 3,
        title: 'Team',
        icon: <FiUsers />,
        project_detail: 12,
        completed: 1
    },
    {
        id: 4,
        title: 'Productivity',
        icon: <VscTarget />,
        project_detail: '75%',
        completed: '5%'
    },
]

const CardContainer = () => {
    return (
        <div className="space-y-6 md:space-y-0 md:flex justify-between gap-6 items-center">
            {
                dashboardCards.map(({id, title, icon, project_detail, completed})=>{
                    return (
                        <div key={id} className="shadow-md p-4 w-full rounded-md bg-white transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-center">
                                <p className="font-bold">{title}</p>
                                <span className="text-2xl rounded-md bg-[#D0C9FF] text-primary p-2">{icon}</span>
                            </div>
                            <h2 className="text-4xl font-bold pt-5 pb-4">{project_detail}</h2>
                            <p>{completed} Completed</p>
                        </div>
                    )
                } )
            }
        </div>
    );
};

export default CardContainer;