import { PrismaClient, Review } from "@prisma/client";
import Description from "./components/Description";
import Images from "./components/Images";
import Rating from "./components/Rating";
import ReservationCard from "./components/ReservationCard";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Reviews from "./components/Reviews";
import Title from "./components/Title";
import { notFound } from "next/navigation";

const prisma = new PrismaClient();

interface Restaurant {
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: Review[];
}

const fetchRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      images: true,
      description: true,
      slug: true,
      reviews: true,
    },
  });

  if (!restaurant) {
    // whenever this Next.js function is called, the also Next.js not-found component
    // will be rendered.
    notFound();
  }

  return restaurant;
};

// by default Next.js provide page components with some useful props like "slug" we can use.
export default async function RestaurantDetails({
  params,
}: {
  params: { slug: string };
}) {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className="w-[27%] relative text-base">
        <ReservationCard />
      </div>
    </>
  );
}
