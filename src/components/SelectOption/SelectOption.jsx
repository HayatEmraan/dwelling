
const SelectOption = () => {

    return (
        <div>
            <form>
                <select defaultValue={'default'} className="select select-bordered w-full max-w-xs">
                    <option selected value={'status'}>Status</option>
                    <option value={'active'}>Active</option>
                    <option value={'blog'}>Blocked</option>
                </select>
            </form>
        </div>
    );
};

export default SelectOption;