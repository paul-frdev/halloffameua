import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import React from "react";

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

interface TitleProps extends HTMLMotionProps<HeadingTag> {
  children: React.ReactNode;
  className?: string;
  tag?: HeadingTag;
}

export const Title: React.FC<TitleProps> = ({
  children,
  className,
  tag = 'h2',
  ...motionProps
}) => {
  const Component = motion[tag];

  return (
    <Component
      {...motionProps}
      className={cn(`font-sfPro font-bold leading-normal`, className)}
    >
      {children}
    </Component>
  );
};