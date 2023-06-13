import Link from "next/link";

export default function RestaurantNavBar() {
  return (
    <nav className="flex pb-2 text-base border-b">
      <Link href="/restaurant/milestones-grill" className="mr-7">
        Overview
      </Link>
      <Link href="/restaurant/milestones-grill/menu" className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
