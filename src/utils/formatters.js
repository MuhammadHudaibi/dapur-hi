import React from "react";

export const formatPrice = (price) => {
  if (typeof price !== "number") return "";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};
