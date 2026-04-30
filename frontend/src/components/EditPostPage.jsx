export default function EditPostPage() {
  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <div className="max-lg:collapse bg-base-100 md:max-w-2xl md:mx-auto lg:max-w-3xl p-5">
          <h1 className="text-2xl front-semibold mb-4">Edit Post</h1>
          <form className="mt-4 bg-base-100 border-base-300 rounded-box border p-4 shadow">
            {/* Title */}
            <fieldset className="fieldset">
              <label
                htmlFor="post-title"
                className="fieldset-legend text-lg p-0"
              >
                Title
              </label>
              <input
                id="post-title"
                required
                type="text"
                className="input w-full mt-2 validator"
                placeholder="My awesome post"
              />
              <p className="validator-hint hidden peer-invalid:block">
                Title must not be empty
              </p>
            </fieldset>
            {/* Content */}
            <fieldset className="fieldset">
              <label
                htmlFor="post-content"
                className="fieldset-legend text-lg p-0"
              >
                Content
              </label>
              <textarea
                id="post-content"
                required
                className="textarea validator mt-2 w-full h-48"
                placeholder="Bio"
              ></textarea>
              <p className="validator-hint hidden peer-invalid:block">
                Content must not be empty
              </p>
            </fieldset>
            {/* Publish checkbox */}
            <div className="flex justify-between items-center">
              <label className="label pt-4 pb-2 text-sm">
                <input type="checkbox" defaultChecked className="toggle" />{" "}
                Publish
              </label>
              <button className="btn bg-black text-white border-black mt-3 rounded-box hover:bg-[#333333]">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
