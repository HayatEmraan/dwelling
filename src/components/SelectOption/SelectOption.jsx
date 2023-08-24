
const SelectOption = () => {

    return (
        <div>
            <form>
                <select defaultValue={'default'} className="select select-bordered w-full max-w-xs">
                    <option selected value={'status'}>All Users</option>
                    <option value={'active'}>Hosts</option>
                    <option value={'blog'}>Guests</option>
                </select>
            </form>
        </div>
    );
};

export default SelectOption;