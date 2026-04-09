import DashboardCard from "./sub-components/DashboardCard";
export default function DashboardPage() {
  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <div className="max-lg:collapse bg-base-100 lg:max-w-6xl lg:mx-auto p-5">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
            <select
              defaultValue="Sort By"
              className="select select-bordered w-40"
            >
              <option disabled>Sort By</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
            <input
              type="text"
              placeholder="Search blogs..."
              className="input input-bordered w-64 lg:w-auto"
            />
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <DashboardCard />
            <DashboardCard />
          </div>
        </div>
      </div>
    </>
  );
}
