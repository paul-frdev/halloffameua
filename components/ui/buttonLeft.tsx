"use client";

import { ChevronLeft } from 'lucide-react';
import { Button } from "./button";
import React from "react";

interface ButtonLeftProps {
  quantity?: number;
  setQuantity?: (data: number) => void;
}
export const ButtonLeft: React.FC<ButtonLeftProps> = ({ quantity, setQuantity }) => {
  return (
    <Button
      disabled={quantity === 0}
      onClick={() => setQuantity?.(quantity! - 1)}
      variant="outline"
      className="hover:bg-transparent border-none px-2"
    >
      <ChevronLeft fill={quantity === 0 ? "#999999" : "#000"} />
    </Button>
  );
};