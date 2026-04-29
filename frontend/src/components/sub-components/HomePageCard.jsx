export default function HomePageCard() {
  return (
    <>
      <article className="w-full h-[210px] p-3 rounded-md shadow flex flex-col gap-3 cursor-pointer">
        <div className="avatar flex items-center gap-3">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
          <span className="text-sm">Evorycs</span>
        </div>
        <h2 className="text-lg font-bold">This is awesome man!</h2>
        <p className="text-sm text-gray-600 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex gap-2 text-[15px] text-gray-600 items-center">
          <time>Mar 30, 2026</time>
          <span>·</span>
          <span>1 min read </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              ></path>
            </svg>
            1
          </span>
        </div>
      </article>
    </>
  );
}
