import Link from "next/link";

export default function RestaurantCard() {
  return (
    <div className="flex pb-5 border-b">
      <img
        src="https://resizer.otstatic.com/v2/photos/xlarge/2/29359077.webp"
        alt=""
        className="rounded w-44"
      />
      <div className="pl-5">
        <h3 className="text-3xl">Taylor and Clay</h3>
        <div className="flex items-start">
          <div className="flex mb-2">*****</div>
          <p className="ml-2 text-sm">Awesome</p>
        </div>
        <div className="mb-9">
          <div className="flex text-base font-light">
            <p className="mr-4">$</p>
            <p className="mr-4">Brazilian</p>
            <p className="mr-4">Sao Paulo</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href="/restaurant/milestones-grill">View more information</Link>
        </div>
      </div>
    </div>
  );
}
