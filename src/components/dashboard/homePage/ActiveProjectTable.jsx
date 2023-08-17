
import TableRow from "./TableRow";


const projectsData = [
    {
        id: 1,
        name: 'Dropbox Design System',
        logo: 'https://dashui.codescandy.com/dashuipro/assets/images/svg/brand-logo-1.svg',
        hours: 34,
        priority: 'Medium',
        members: [
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-11.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-3.jpg'
            }
        ],
        progress: '35%'
    },
    {
        id: 2,
        name: 'GitHub Satellite',
        logo: 'https://dashui.codescandy.com/dashuipro/assets/images/svg/brand-logo-3.svg',
        hours: 47,
        priority: 'High',
        members: [
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-4.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-11.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-3.jpg'
            }
        ],
        progress: '75%'
    },
    {
        id: 3,
        name: 'Slack Team UI Design',
        logo: 'https://dashui.codescandy.com/dashuipro/assets/images/svg/brand-logo-2.svg',
        hours: 56,
        priority: 'Low',
        members: [
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-5.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-11.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-6.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-3.jpg'
            }
        ],
        progress: '25%'
    },
    {
        id: 4,
        name: '3D Character Modelling',
        logo: 'https://dashui.codescandy.com/dashuipro/assets/images/svg/brand-logo-6.svg',
        hours: 84,
        priority: 'Medium',
        members: [
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-11.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-3.jpg'
            }
        ],
        progress: '67%'
    },
    {
        id: 5,
        name: 'Webapp Design System',
        logo: 'https://dashui.codescandy.com/dashuipro/assets/images/svg/brand-logo-4.svg',
        hours: 26,
        priority: 'Track',
        members: [
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-5.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-11.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-6.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-3.jpg'
            }
        ],
        progress: '44%'
    },
    {
        id: 6,
        name: 'Github Event Design',
        logo: 'https://dashui.codescandy.com/dashuipro/assets/images/svg/brand-logo-5.svg',
        hours: 57,
        priority: 'Low',
        members: [
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-11.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-2.jpg'
            },
            {
                image: 'https://dashui.codescandy.com/dashuipro/assets/images/avatar/avatar-3.jpg'
            }
        ],
        progress: '54%'
    }
]

const ActiveProjectTable = () => {
    return (
        <div className="overflow-x-auto">
            <h3 className="text-xl mt-5 font-semibold bg-white p-3 rounded-md">Active Projects</h3>
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="border border-slate-200 text-[14px] text-gray-700">
                        <th>Project name</th>
                        <th>Hours</th>
                        <th>Priority</th>
                        <th>Members</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        projectsData.map((item, index) => <TableRow item={item} key={index}/>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default ActiveProjectTable;