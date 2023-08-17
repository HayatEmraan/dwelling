import Image from "next/image";

const TableRow = ({item}) => {
    const { id, name, logo, hours, priority, members, progress } = item;

    console.log(id, logo, name, hours, members, progress, priority)
    console.log(item)
    return (
        <tr className="bg-white">
            <td>
                <div className="flex items-center space-x-4">
                    <Image src={logo} width={30} height={30} alt="Project Logo" />
                    <h4 className="text-md font-semibold">{name}</h4>
                </div>
            </td>
            <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default TableRow;