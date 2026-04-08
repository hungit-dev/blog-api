import DashboardCard from "./sub-components/DashboardCard";
export default function DashboardPage() {
  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <div className="max-lg:collapse bg-base-100 lg:max-w-6xl lg:mx-auto p-5">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-3">
            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="btn">
                Sort By{" "}
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 320 512"
                  className="mb-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8l256 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"></path>
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Newest</a>
                </li>
                <li>
                  <a>Oldest</a>
                </li>
                <li>
                  <a>A-Z</a>
                </li>
                <li>
                  <a>Z-A</a>
                </li>
              </ul>
            </div>
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
