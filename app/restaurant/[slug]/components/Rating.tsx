import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "../../../../utils/calculateReviewRatingAverage";
import Stars from "../../../components/Stars";

export default function Rating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex items-end">
      <div className="flex items-center mt-2 ratings">
        <Stars reviews={reviews} />
        <p className="ml-3 text-base">
          {!reviews.length && "No reviews "}

          {/* to avoid an average like 3.999999 */}
          {calculateReviewRatingAverage(reviews).toFixed(1)}
        </p>
      </div>
      <div>
        <p className="ml-4 text-base">
          {reviews.length} Review{reviews.length > 1 ? "s" : ""}
        </p>
      </div>
    </div>
  );
}
