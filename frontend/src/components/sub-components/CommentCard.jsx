export default function CommentCard() {
  return (
    <>
      <div className="flex items-start gap-3 mt-4">
        <div className="avatar">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <span className=" font-bold">Evorycs</span>
          <span>ingat po kayo!</span>
          <span className="text-sm text-gray-500">Mar 19, 2026, 9:29 PM</span>
        </div>
      </div>
    </>
  );
}
