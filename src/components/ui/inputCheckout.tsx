import * as React from "react";

import { cn } from "@/lib/utils";

interface InputCheckoutProps extends React.ComponentProps<"input"> {
  error?: string;
}

const InputCheckout = React.forwardRef<HTMLInputElement, InputCheckoutProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className={cn("w-full relative pb-[25px]", className)}>
        <label className="text-[14px] font-semibold">{props.title}</label>
        <input
          type={type}
          className={`flex h-9 w-full border  ${
            error ? "border-red-500" : "border-gray-200"
          } bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-neutral-950 placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:border-neutral-800 dark:file:text-neutral-50 dark:placeholder:text-neutral-400 dark:focus-visible:ring-neutral-300`}
          ref={ref}
          {...props}
        />
        {error && (
          <p className="absolute bottom-0 text-red-500 text-sm mt-1">{error}</p>
        )}
      </div>
    );
  }
);
InputCheckout.displayName = "InputCheckout";

export { InputCheckout };
