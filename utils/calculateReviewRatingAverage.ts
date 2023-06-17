import { Review } from "@prisma/client";

export const calculateReviewRatingAverage = (reviews: Review[]) => {
  // so we don't get a "NaN" in case the restaurant has no reviews (0/0 = NaN)
  if (!reviews.length) return 0;

  return (
    reviews.reduce((sum, review) => {
      return sum + review.rating;
    }, 0) / reviews.length
  );
};
