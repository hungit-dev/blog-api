export default function HomePageCard({ postInfo }) {
  const minRead = Math.ceil(postInfo.content.split(" ").length / 200);
  return (
    <>
      <article className="w-full h-[210px] p-3 rounded-md shadow flex flex-col gap-3 cursor-pointer">
        <div className="avatar flex items-center gap-3">
          <div className="w-10 rounded-full">
            <img src="https://static.vecteezy.com/system/resources/previews/036/280/651/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg" />
          </div>
          <span className="text font-semibold">{postInfo.user.username}</span>
        </div>
        <h2 className="text-lg font-bold">{postInfo.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{postInfo.content}</p>
        <div className="flex gap-2 text-[15px] text-gray-600 items-center">
          <time>
            {new Date(postInfo.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>·</span>
          <span>{minRead} min read</span>
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
            {postInfo._count.comments}
          </span>
        </div>
      </article>
    </>
  );
}
