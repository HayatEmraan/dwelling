
const myTasks = [
    {
        id: 1,
        name: 'Design a FreshCart Home page',
        deadline: 'Today',
        status: 'Approved',
    },
    {
        id: 2,
        name: 'Develop a Dash UI Laravel',
        deadline: 'Yesterday',
        status: 'Pending',
    },
    {
        id: 3,
        name: 'Next.js Dash UI version',
        deadline: '12 Sept, 2023',
        status: 'In Progress',
    },
    {
        id: 4,
        name: 'Dash UI landing page design',
        deadline: '23 Sept, 2023',
        status: 'Approved',
    },
    {
        id: 5,
        name: 'Dash UI Dark Version Design',
        deadline: '23 Sept, 2023',
        status: 'Pending',
    },
    {
        id: 6,
        name: 'Coach home page design',
        deadline: '12 Sept, 2023',
        status: 'Approved',
    },
]

const MyTaskTable = () => {
    return (
        <div className="overflow-x-auto w-full bg-white rounded-lg mb-8 dark:bg-slate-800 dark:text-white">
            <div className="flex justify-between items-center p-4">
                <h3 className="text-md font-semibold">My Tasks</h3>
                <button className="p-3 btn bg-white">Create New Project</button>
            </div>
            <table className="table">

                {/* head */}
                <thead>
                    <tr className="border border-slate-200 bg-slate-100 text-[14px] text-gray-700 dark:bg-slate-800 dark:text-white">
                        <th></th>
                        <th>Name</th>
                        <th>Deadline</th>
                        <th>Status</th>                        
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myTasks.map(({ id, name, deadline, status }) => <tr key={id} className="hover:bg-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-900">
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td className="whitespace-nowrap">
                                {name}
                            </td>
                            <td className="whitespace-nowrap">
                                {deadline}
                            </td>
                            <td className="whitespace-nowrap">
                                <div className={`badge font-semibold ${status === 'Pending' ? 'bg-secondary bg-opacity-10 text-secondary ' : status === 'In Progress' ? 'bg-warning bg-opacity-10 text-warning' : status === 'Approved' ? 'bg-green-600 bg-opacity-10 text-green-600 ' : ''}`}>{status}</div>
                            </td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyTaskTable;