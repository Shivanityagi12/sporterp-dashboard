
import { FiFilter, FiSettings, FiPlus, FiSearch } from "react-icons/fi";

 function PageHeader() {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-4">All products</h2>

      {/* Row */}
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center gap-2">
          {/* Search with icon */}
          <div className="flex items-center gap-2 border px-3 py-2 rounded-md w-64">
            <FiSearch className="text-gray-400" />
            <input
              type="text"
              placeholder="Search subscriptions"
              className="outline-none text-sm w-full"
            />
          </div>

          <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm">
            Search
          </button>

          <button className="border px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <FiFilter />
            Filters
          </button>

          <button className="border px-4 py-2 rounded-md text-sm flex items-center gap-2">
            <FiSettings />
            Configurations
          </button>
        </div>

        {/* Right side */}
        <button className="bg-red-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
          <FiPlus />
          Add new Product
        </button>
      </div>
    </div>
  );
}
export default PageHeader
