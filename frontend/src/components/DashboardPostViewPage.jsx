export default function DashboardPostViewPage() {
  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <div className="max-lg:collapse bg-base-100 lg:max-w-3xl lg:mx-auto p-5 flex flex-col gap-5">
          <a href="" className="flex items-center gap-2 hover:underline ">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            Back to dashboard
          </a>
          <div className="flex flex-col gap-3 border border-gray-300 rounded-md p-5">
            <div className="flex gap-3 justify-end text-sm">
              <a href="" className="text-red-400 hover:underline">
                Delete
              </a>
              <a href="" className="hover:underline">
                Edit
              </a>
            </div>
            <div>
              <h1 className="text-3xl font-bold">asdasda</h1>
            </div>
            <div className=" text-sm flex gap-2 text-gray-600 items-center">
              <span>@hung1234</span>
              <span>·</span>
              <span>Apr 29, 2026, 8:00 AM</span>
            </div>
            <div>
              <p>dasdasdasdasd</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
