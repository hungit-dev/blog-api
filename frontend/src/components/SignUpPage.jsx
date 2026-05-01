export default function SignUpPage() {
  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <form className="max-lg:collapse bg-base-100 md:max-w-md md:mx-auto lg:max-w-sm p-5">
          <h1 className=" font-semibold text-center text-2xl mb-2">Sign Up</h1>
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
            <input type="checkbox" className="checkbox" />
            Become an author
          </label>
          <button className="btn bg-black text-white border-black mt-3 w-full hover:bg-[#333333]">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}
