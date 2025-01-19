// SearchComponent.jsx
import { HiMiniMagnifyingGlass } from "react-icons/hi2";

const SearchComponent = () => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="text-sm p-1 md:p-2 bg-stone-200 border rounded-full focus:ring-2 focus:ring-gray-400 focus:outline-none w-40"
      />
      <span className="absolute right-3 text-gray-500">
        <HiMiniMagnifyingGlass size={20} />
      </span>
    </div>
  );
};

export default SearchComponent;
