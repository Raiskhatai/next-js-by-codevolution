import React from "react";
import ReviewNotfound from "./not-found";

type forPromise = {
  reviewId: string;
  productId: string;
};

type props = {
  params: Promise<forPromise>;
};

const ReviewId = async ({ params }: props) => {
  const { reviewId, productId } = await params;
  if (parseInt(reviewId) > 1000) {
    return ReviewNotfound();
  }
  return (
    <div>
      review {reviewId} for product {productId}
    </div>
  );
};

export default ReviewId;
