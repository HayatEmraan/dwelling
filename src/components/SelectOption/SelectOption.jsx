const SelectOption = () => {
  return (
    <form>
      <select
        defaultValue={"default"}
        className="select select-bordered w-full max-w-xs"
      >
        <option value={"default"}>All Users</option>
        <option value={"active"}>Hosts</option>
        <option value={"blog"}>Guests</option>
      </select>
    </form>
  );
};

export default SelectOption;
