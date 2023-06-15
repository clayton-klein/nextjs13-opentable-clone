export default function SearchSideBar() {
  return (
    <div className="w-1/5">
      <div className="pb-4 border-b">
        <h1 className="mb-2">Region</h1>
        <p className="text-base font-light">Toronto</p>
        <p className="text-base font-light">London</p>
        <p className="text-base font-light">Sao Paulo</p>
        <p className="text-base font-light">Oakland</p>
        <p className="text-base font-light">Sidney</p>
      </div>
      <div className="pb-4 mt-3 border-b">
        <h1 className="mb-2">Cuisine</h1>
        <p className="text-base font-light">Brazilian</p>
        <p className="text-base font-light">Mexican</p>
        <p className="text-base font-light">Italian</p>
      </div>
      <div className="pb-4 mt-3">
        <h1 className="mb-2">Price</h1>
        <div className="flex gap-1">
          <button className="w-full p-2 text-base font-light border rounded-l">
            $
          </button>
          <button className="w-full p-2 text-base font-light border">$$</button>
          <button className="w-full p-2 text-base font-light border rounded-r">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
