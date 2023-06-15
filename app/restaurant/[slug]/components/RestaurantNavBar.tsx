import Link from "next/link";

export default function RestaurantNavBar({ slug }: { slug: string }) {
  return (
    <nav className="flex pb-2 text-base border-b">
      <Link href={`/restaurant/${slug}`} className="mr-7">
        Overview
      </Link>
      <Link href={`/restaurant/${slug}/menu`} className="mr-7">
        Menu
      </Link>
    </nav>
  );
}
