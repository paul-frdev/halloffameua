"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface CurrencyProps {
  price: number;
  discount?: string;
  isDiscount?: boolean;
  priceClass?: string
}
export const Currency: React.FC<CurrencyProps> = ({ price, discount, isDiscount, priceClass }) => {

  return (
    <div className="flex justify-center items-center">
      <p className={cn(`text-[1.125rem] font-sfPro font-bold text-black h-[45px]`, priceClass, isDiscount && "line-through mr-4")}>
        {price} ₴
      </p>
      {isDiscount && (
        <p className="text-3xl font-bold text-gray-600 pb-2 h-[45px]">NO</p>
      )}
    </div>
  );
};
