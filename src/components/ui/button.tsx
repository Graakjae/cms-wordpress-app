import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "bg-PrimaryGreen text-white text-[16px] shadow hover:bg-PrimaryGreenHover",
        secondary:
          "bg-white text-PrimaryGreen text-[16px] shadow-sm border-2 border-PrimaryGreen",
        link: "text-[16px]",
        lightGreen:
          "bg-SecondaryGreen text-white text-[16px] shadow hover:bg-SecondaryGreenHover ",
        disabled: "bg-neutral-200 text-neutral-500 cursor-not-allowed",
      },
      size: {
        default: "h-[48px] min-w-[196px] px-[45px]",
        sm: "h-8 px-3 text-xs",
        lg: "h-[60px] w-full px-8",
        link: "h-auto min-w-[0] px-0",
        icon: "h-[48px] min-w-[196px] pl-[45px] pr-[45px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
