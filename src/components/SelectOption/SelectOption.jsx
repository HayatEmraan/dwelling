const SelectOption = () => {

    return (
        <>
            <form>
                <select className="select select-bordered w-full max-w-xs">
                    <option selected value={'allusers'}>All Users</option>
                    <option value={'hosts'}>Hosts</option>
                    <option value={'guests'}>Guests</option>
                </select>
            </form>
        </>
    );
};

export default SelectOption;
