import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils.js";

const buttonVariants = cva(
  "btn",
  {
    variants: {
      variant: {
        primary: "btn-primary",
        secondary: "bg-secondary",
        outline: "btn-outline",
        ghost: "btn-ghost",
      },
      size: {
        sm: "btn-sm",
        md: "btn-md",
        lg: "btn-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {

}

export function Button({children,variant,size,className,...props}:ButtonProps){
return (
  <button className={cn(buttonVariants({ variant, size, className }))} {...props}>
    {children}
  </button>
);
}
