import Link from "next/link";
import { RestaurantCardType } from "../page";
import Price from "./Price";
import Stars from "./Stars";

interface Props {
  restaurant: RestaurantCardType;
}

export default function RestaurantCard({ restaurant }: Props) {
  return (
    <div className="w-[22%] m-3 overflow-hidden border rounded cursor-pointer h-72">
      <Link href={`/restaurant/${restaurant.slug}`}>
        <img src={restaurant.main_image} alt="" className="w-full h-36" />
        <div className="p-1">
          <h3 className="mb-2 text-2xl font-bold">{restaurant.name}</h3>
          <div className="flex items-start">
            <Stars reviews={restaurant.reviews} />
            <p className="ml-2">
              {restaurant.reviews.length} review
              {restaurant.reviews.length > 1 ? "s" : ""}
            </p>
          </div>
          <div className="flex text-base font-light capitalize">
            <p className="mr-3">{restaurant.cuisine.name}</p>
            <Price price={restaurant.price} />
            <p>{restaurant.location.name}</p>
          </div>
          <p className="mt-1 text-sm font-semibold">Booked 3 times today!</p>
        </div>
      </Link>
    </div>
  );
}
