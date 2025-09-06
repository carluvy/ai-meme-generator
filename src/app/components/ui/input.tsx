import React from "react";
import {cn} from "@/app/utils/utils";


type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "file", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className="hidden"
        // className={cn(
        //   "flex h-12 w-full cursor-pointer rounded-2xl border border-gray-300/80 bg-white text-base text-gray-700 shadow-sm transition-all duration-200 file:mr-4 file:rounded-xl file:border-0 file:bg-indigo-500 file:px-4 file:py-2 file:text-base file:font-semibold file:text-white hover:file:bg-indigo-600 focus:border-indigo-400 focus:shadow-lg focus:ring-2 focus:ring-indigo-300 disabled:cursor-not-allowed disabled:opacity-60",
        //
        //   "dark:border-gray-600 dark:bg-transparent dark:text-gray-100 dark:file:bg-indigo-500 dark:hover:file:bg-indigo-600 dark:focus:border-indigo-500 dark:focus:ring-indigo-400",
        //
        //   className
        // )}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }


