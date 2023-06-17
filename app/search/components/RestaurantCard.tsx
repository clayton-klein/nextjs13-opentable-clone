import { Cuisine, Location, PRICE, Review } from "@prisma/client";
import Link from "next/link";
import Price from "../../components/Price";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewRatingAverage";
import Stars from "../../components/Stars";

interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  slug: string;
  // the types bellow were imported from Prisma
  price: PRICE;
  cuisine: Cuisine;
  location: Location;
  reviews: Review[];
}

export default function RestaurantCard({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);
    if (rating > 4) return "Awesome";
    else if (rating <= 4 && rating > 3) return "Good";
    else if (rating <= 3 && rating > 0) return "Average";
    else return "No reviews";
  };

  return (
    <div className="flex pb-5 border-b ml-16">
      <img src={restaurant.main_image} alt="" className="rounded h-36 w-44" />
      <div className="pl-5">
        <h3 className="text-3xl">{restaurant.name}</h3>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={restaurant.reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="flex text-base font-light">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
            <p className="mr-4 capitalize">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600 hover:font-bold">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
}
