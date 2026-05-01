import API_URL from "../lib/api";
import { useAuth } from "../hooks/useAuth";

export default function SignUpPage() {
  const { signUpMutation } = useAuth();

  // Get states for sign up mutation
  const {
    mutate: signUp,
    isPending: isSigning,
    isError,
    error,
  } = signUpMutation;

  // handlers
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    signUp({
      email: form.email.value,
      username: form.username.value,
      password: form.password.value,
      role: form.role.checked ? "AUTHOR" : "READER",
    });
  }
  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <form
          className="max-lg:collapse bg-base-100 md:max-w-md md:mx-auto lg:max-w-sm p-5"
          onSubmit={handleSubmit}
        >
          <h1 className=" font-semibold text-center text-2xl mb-2">Sign Up</h1>

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
              className="input validator w-full"
              type="email"
              required
              placeholder="mail@site.com"
              autoComplete="email"
            />
            <div className="validator-hint hidden peer-invalid:block">
              Enter valid email address
            </div>
          </fieldset>

          {/* username */}
          <fieldset className="fieldset w-full">
            <label
              htmlFor="username"
              className="fieldset-legend text-base text-dark-600"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="input validator w-full"
              required
              placeholder="Username"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              title="Only letters, numbers or dash"
              autoComplete="username"
            />
            <p className="validator-hint hidden peer-invalid:block">
              Must be 3 to 30 characters
              <br />
              containing only letters, numbers or dash
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
              autoComplete="new-password"
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
          {/* Become an author checkbox */}
          <label className="label pt-4 pb-2 text-sm">
            <input type="checkbox" name="role" className="checkbox" />
            Become an author
          </label>
          <button
            className="btn bg-black text-white border-black mt-3 w-full hover:bg-[#333333] disabled:opacity-70"
            disabled={isSigning}
          >
            {isSigning ? (
              <span className="loading loading-dots loading-lg"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
