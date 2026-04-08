import { Link } from "react-router";
export default function ErrorPage() {
  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <div className="max-lg:collapse bg-base-100 lg:max-w-sm lg:mx-auto p-5">
          <h1 className=" font-semibold text-center text-2xl mb-2">
            404 Not Found
          </h1>
          <p className="text-center text-gray-600">
            The page you are looking for does not exist.
          </p>
          <Link
            to="/"
            className="btn bg-black text-white border-black mt-3 w-full hover:bg-[#333333]"
          >
            Go back to Home
          </Link>
        </div>
      </div>
    </>
  );
}
