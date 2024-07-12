"use client";

import { ChevronRight } from 'lucide-react';
import { Button } from "./button";
import React from "react";


interface ButtonRightProps {
  quantity?: number;
  setQuantity?: (data: number) => void;
}
export const ButtonRight: React.FC<ButtonRightProps> = ({ quantity, setQuantity }) => {
  return (
    <Button
      disabled={quantity === 5}
      onClick={() => setQuantity?.(quantity! + 1)}
      variant="outline"
      className="hover:bg-transparent border-none px-2"
    >
      <ChevronRight fill={quantity === 5 ? "#999999" : "#000"} />
    </Button>
  );
};
