import { PRICE, PrismaClient } from "@prisma/client";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import SearchSideBar from "./components/SearchSideBar";

const prisma = new PrismaClient();

const fetchRestaurantsByCity = async (city: string | undefined) => {
  const select = {
    id: true,
    name: true,
    main_image: true,
    price: true,
    cuisine: true,
    location: true,
    slug: true,
  };

  // return all restaurants
  if (!city) return prisma.restaurant.findMany({ select });

  // filter restaurants by city
  const restaurants = await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          // make sure to lower case inputs to avoid misbehavior
          equals: city.toLowerCase(),
        },
      },
    },
    select,
  });

  return restaurants;
};

const fetchLocations = async () => {
  return prisma.location.findMany();
};

const fetchCuisines = async () => {
  return prisma.cuisine.findMany();
};

export default async function Search({
  searchParams,
}: {
  searchParams: { city?: string; cuisine?: string; price?: PRICE };
}) {
  const searchedCity = searchParams.city;

  const restaurants = await fetchRestaurantsByCity(searchedCity);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();

  return (
    <>
      <Header />
      <div className="flex items-start justify-between w-2/3 py-4 m-auto">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            // we need this fragment, otherwise we get an error
            <>
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </>
          ) : (
            <p>
              Sorry, but no restaurant was found in this location, try again!
            </p>
          )}
        </div>
      </div>
    </>
  );
}
