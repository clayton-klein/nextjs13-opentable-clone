import { Cuisine, Location, PRICE } from "@prisma/client";
import Link from "next/link";

export default function SearchSideBar({
  locations,
  cuisines,
  searchParams,
}: {
  locations: Location[];
  cuisines: Cuisine[];
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
  // just so we don't need to create 3 pretty similar Link elements (line 76)
  const prices = [
    {
      id: 1,
      price: PRICE.CHEAP,
      label: "$",
      className: "w-full p-2 text-base text-center font-light border rounded-l",
    },
    {
      id: 2,
      price: PRICE.REGULAR,
      label: "$$",
      className: "w-full p-2 text-base text-center font-light border",
    },
    {
      id: 3,
      price: PRICE.EXPENSIVE,
      label: "$$$",
      className: "w-full p-2 text-base text-center font-light border rounded-r",
    },
  ];

  return (
    <div className="w-1/5">
      <div className="pb-4 border-b flex flex-col">
        <h1 className="mb-2">Region</h1>
        {locations.map((location) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                // spread the existing query params so we don't lose them by just replacing them.
                ...searchParams,
                city: location.name,
              },
            }}
            className="text-base font-light capitalize"
            key={location.id}
          >
            {location.name}
          </Link>
        ))}
      </div>
      <div className="pb-4 mt-3 border-b flex flex-col">
        <h1 className="mb-2">Cuisine</h1>
        {cuisines.map((cuisine) => (
          <Link
            href={{
              pathname: "/search",
              query: {
                // spread the existing query params so we don't lose them by just replacing them.
                ...searchParams,
                cuisine: cuisine.name,
              },
            }}
            className="text-base font-light capitalize"
            key={cuisine.id}
          >
            {cuisine.name}
          </Link>
        ))}
      </div>
      <div className="pb-4 mt-3">
        <h1 className="mb-2">Price</h1>
        <div className="flex gap-1">
          {prices.map(({ id, price, label, className }) => (
            <Link
              key={id}
              href={{
                pathname: "/search",
                query: {
                  // spread the existing query params so we don't lose them by just replacing them.
                  ...searchParams,
                  price,
                },
              }}
              className={className}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
