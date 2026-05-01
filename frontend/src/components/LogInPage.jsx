import API_URL from "../lib/api";
import { Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

export default function LogInPage() {
  const { loginMutation, isLoggedIn } = useAuth();

  if (isLoggedIn) return <Navigate to="/" replace />;

  // Get states for login mutation
  const { mutate: login, isPending: isLogging, isError, error } = loginMutation;

  // handlers
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    login({ email: form.email.value, password: form.password.value });
  }

  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <form
          className="max-lg:collapse bg-base-100 md:max-w-md md:mx-auto lg:max-w-sm p-5"
          onSubmit={handleSubmit}
        >
          <h1 className=" font-semibold text-center text-2xl mb-2">Log In</h1>

          {/* error alert */}
          {isError && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{error.message}</span>
            </div>
          )}

          {/* email */}
          <fieldset className="fieldset w-full">
            <label
              htmlFor="email"
              className="fieldset-legend text-base text-dark-600"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="input validator w-full"
              required
              placeholder="Email"
              pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}"
              title="Enter a valid email address"
              autoComplete="email"
            />
            <p className="validator-hint hidden peer-invalid:block">
              Enter a valid email address
            </p>
          </fieldset>

          {/* password */}
          <fieldset className="fieldset w-full">
            <label
              htmlFor="password"
              className="fieldset-legend text-base text-dark-600"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="input validator w-full"
              required
              placeholder="Password"
              minLength="8"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              autoComplete="current-password"
            />
            <p className="validator-hint hidden peer-invalid:block">
              Must be more than 8 characters, including
              <br />
              At least one number
              <br />
              At least one lowercase letter
              <br />
              At least one uppercase letter
            </p>
          </fieldset>
          <button
            className="btn bg-black text-white border-black mt-3 w-full hover:bg-[#333333] disabled:opacity-70"
            disabled={isLogging}
          >
            {isLogging ? (
              <span className="loading loading-dots loading-lg"></span>
            ) : (
              "Log In"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
