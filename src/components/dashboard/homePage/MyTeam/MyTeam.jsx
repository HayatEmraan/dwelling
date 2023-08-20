import Image from "next/image";

const teamData = [
    {
        id: 1,
        name: 'Anita Parmar',
        avatar: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg',
        role: 'Front End Developer',
        email: 'anita@gmail.com',
        last_activity: 'Yesterday'
    },
    {
        id: 2,
        name: 'Jitu Chauhan',
        avatar: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-11.jpg',
        role: 'Project Director',
        email: 'jituchauhan@gmail.com',
        last_activity: 'August 23, 2023'
    },
    {
        id: 3,
        name: 'Anamika Patel',
        avatar: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-3.jpg',
        role: 'Full Stack Developer',
        email: 'anamika@patel.com',
        last_activity: 'Today'
    },
    {
        id: 4,
        name: 'Arman Darnel',
        avatar: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-4.jpg',
        role: 'Digital Marketer',
        email: 'araman@gmail.com',
        last_activity: 'August 19, 2023'
    },
    {
        id: 5,
        name: 'Paricia Muril',
        avatar: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-5.jpg',
        role: 'Account Manager',
        email: 'patricia@gmail.com',
        last_activity: 'Yesterday'
    },
    {
        id: 6,
        name: 'Nustaha Zahan',
        avatar: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-3.jpg',
        role: 'Product Manager',
        email: 'nustaha@gmail.com',
        last_activity: 'September 20, 2023'
    },
]

const MyTeam = () => {
    return (
        <div className="overflow-x-auto w-full bg-white rounded-lg mb-8 dark:bg-slate-800 dark:text-white">
            <div className="p-4">
                <h3 className="text-md font-semibold">Team</h3>
            </div>
            <table className="table">

                {/* head */}
                <thead>
                    <tr className="border border-slate-200 bg-slate-100 text-[14px] text-gray-700 dark:bg-slate-800 dark:text-white">
                        <th></th>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Last Activity</th>                              
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        teamData.map(({ id, name, avatar, role, email, last_activity }) => <tr key={id} className="hover:bg-slate-100 dark:hover:text-slate-800">
                            <th>                               
                            </th>
                            <td className="flex items-center space-x-3 whitespace-nowrap mr-5">
                                <Image src={avatar} alt="Profile Picture" width={40} height={40} className="rounded-full" />
                                <div>
                                    <p>{name}</p>
                                    <p>{email}</p>
                                </div>
                            </td>
                            <td className="whitespace-nowrap">
                                {role}
                            </td>
                            <td className="whitespace-nowrap">
                               {last_activity}
                            </td>
                        </tr>)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default MyTeam;