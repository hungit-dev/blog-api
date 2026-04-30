import CommentCard from "./sub-components/CommentCard";
export default function HomePostViewPage() {
  return (
    <>
      <div className=" bg-base-100 w-full shadow-sm rounded-md min-h-[90vh] mt-3">
        <div className="max-lg:collapse bg-base-100 lg:max-w-4xl lg:mx-auto p-5">
          <h1 className="text-3xl font-bold mb-4">This is awesome man!</h1>
          <div className="flex flex-col mt-3 mb-5">
            <div className="avatar flex items-center gap-3 h-[50px]">
              <div className="w-10 rounded-full">
                <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
              </div>
              <div className="flex gap-2 text-[15px] text-gray-600 items-center">
                <span className="text-sm font-bold mr-2">Evorycs</span>
                <span>1 min read </span>
                <span>·</span>
                <time>Mar 30, 2026</time>
              </div>
            </div>
            <div className="">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae,
                non, veniam ut harum eos dolore aperiam enim eius laudantium
                tempore omnis doloribus deleniti quaerat? Neque ipsa vitae
                suscipit doloribus mollitia?
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Comments (4)</h2>
            <form className="mb-5">
              <div className="relative mt-2">
                <textarea
                  name="content"
                  required
                  className="textarea validator w-full h-48 pb-8"
                  placeholder="Write a comment ..."
                ></textarea>
                <button
                  type="submit"
                  className="absolute bottom-9 right-3 flex items-center justify-center"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-gray-500 hover:text-black cursor-pointer"
                    height="17"
                    width="17"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m16 464 480-208L16 48v160l320 48-320 48z"></path>
                  </svg>
                </button>
                <p className="validator-hint">Comment must not be empty</p>
              </div>
            </form>
            <div>
              <CommentCard />
              <CommentCard />
              <CommentCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
