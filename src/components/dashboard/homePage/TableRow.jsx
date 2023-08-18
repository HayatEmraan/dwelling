import Image from "next/image";
import AvatarGroup from "./AvatarGroup";

const TableRow = ({ item }) => {
    const { name, logo, hours, priority, members, progress } = item;

    return (
        <tr className="bg-white hover:bg-slate-100">
            <td>
                <div className="flex items-center space-x-4 whitespace-nowrap">
                    <Image src={logo} width={30} height={30} alt="Project Logo" />
                    <h4 className="text-md font-semibold">{name}</h4>
                </div>
            </td>
            <td>
                <p>{hours}</p>
            </td>
            <td>
                <div className={`badge font-semibold ${priority === 'High' ? 'bg-secondary bg-opacity-10 text-secondary ' : priority === 'Medium' ? 'bg-warning bg-opacity-10 text-warning' : priority === 'Low' ? 'bg-primary bg-opacity-10 text-primary' : priority === 'Track' ? 'bg-green-600 bg-opacity-10 text-green-600 ' : ''}`}>{priority}</div>
            </td>
            <td className="avatar-group -space-x-6">
                {
                    members.map((member, index) => <AvatarGroup member={member} key={index} />)
                }
                <div className="avatar placeholder">
                    <div className="w-[34px] bg-primary-focus text-neutral-content">
                        <span>+{members.length}</span>
                    </div>
                </div>
            </td>
            <td className="space-x-2">
                <span>{progress}%</span>
                <progress className="progress progress-primary w-8" value={progress} max="100"></progress>
            </td>
        </tr>
    );
};

export default TableRow;