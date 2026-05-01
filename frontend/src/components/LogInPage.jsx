export default function LogInPage() {
  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <form className="max-lg:collapse bg-base-100 md:max-w-md md:mx-auto lg:max-w-sm p-5">
          <h1 className=" font-semibold text-center text-2xl mb-2">Log In</h1>
          {/* username */}
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
          <button className="btn bg-black text-white border-black mt-3 w-full hover:bg-[#333333]">
            Log In
          </button>
        </form>
      </div>
    </>
  );
}
