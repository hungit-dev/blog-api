export default function DashboardCard() {
  return (
    <>
      <div className="card bg-base-100 card-md shadow-sm cursor-pointer hover:bg-base-200 transition-colors">
        <div className="card-body">
          <h2 className="card-title">Blog Title</h2>
          <p className="line-clamp-2 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur eius, explicabo debitis autem necessitatibus corporis
            aliquid eligendi sequi vitae ullam atque ducimus veritatis
            aspernatur voluptate culpa suscipit doloribus enim nam!
          </p>
          <div className="justify-start card-actions text-gray-400">
            <time>June 1, 2024</time>
          </div>
        </div>
      </div>
    </>
  );
}
