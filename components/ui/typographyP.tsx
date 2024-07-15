import { cn } from "@/lib/utils";
import { Variants, motion } from "framer-motion";
import React from "react";

interface TypographyProps {
  className?: string;
  variants?: Variants;
  animate?: any;
  children: React.ReactNode;
}
export const TypographyP: React.FC<TypographyProps> = ({ className, children, variants, animate }) => {
  return (
    <motion.p variants={variants} animate={animate} className={cn(` font-sfPro font-normal text-[1.5rem] `, className)}>
      {children}
    </motion.p>
  );
};
