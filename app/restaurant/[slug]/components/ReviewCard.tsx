import { Review } from "@prisma/client";
import Stars from "../../../components/Stars";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div key={review.id} className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="flex flex-col items-center w-1/5">
          <div className="flex items-center justify-center w-16 h-16 bg-blue-400 rounded-full">
            <h2 className="text-2xl text-white">
              {review.first_name.charAt(0).toUpperCase()}
              {review.last_name.charAt(0).toUpperCase()}
            </h2>
          </div>
          <p>{`${review.first_name} ${review.last_name}`}</p>
        </div>
        <div className="w-5/6 ml-10">
          <div className="flex items-center">
            <div className="flex mr-5">
              {/* here we had to do some changes in the Star component, because we're passing
              a single review and not an array of reviews as it was expected, then we passed 
              reviews as a prop, but with an empty array just to satisfy TS */}
              <Stars rating={review.rating} reviews={[]} />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-lg font-light">{review.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
