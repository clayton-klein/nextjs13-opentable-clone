import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import { PrismaClient, Cuisine, Location, PRICE } from "@prisma/client";

/**
 * Since this is a server component we don't need to make an HTTP request to fetch the data,
 * we can just use Prisma to access the db directly.
 */
const prisma = new PrismaClient();

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  // passing an option object with exactly the info we need from the db to show on the cards
  const restaurants = await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      main_image: true,
      cuisine: true,
      slug: true,
      location: true,
      price: true,
    },
  });

  return restaurants;
};

export interface RestaurantCardType {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  // imported these types bellow from Prisma
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
}

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <>
      <Header />
      <div className="flex flex-wrap py-3 mt-10 px-36">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
}
