import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-nunito font-semibold transition-all",
  {
    variants: {
      variant: {
        primary: "bg-brand-blue text-white hover:bg-blue-800",
        secondary: "bg-brand-light text-brand-blue hover:bg-blue-300",
        outline:
          "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
      },
      size: {
        sm: "px-3 py-1 text-sm rounded-md",
        md: "px-4 py-2 text-base rounded-lg",
        lg: "px-5 py-3 text-lg rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

// 
export function Button({ className, variant, size, ...props }) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
