import { Button } from "@/components/ui/button";

export function ButtonWithIcon({ children }: { children: React.ReactNode }) {
  return (
    <Button
      size={"icon"}
      variant={"secondary"}
      className="group overflow-visible relative"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 15"
        fill="none"
        className="overflow-visible"
      >
        <path
          className="transition-all duration-300 group-hover:translate-x-[32%] group-hover:transform-origin-left"
          d="M11.9854 13.5355L18.0209 7.5L11.9854 1.46448"
          stroke="#005e61"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className="transition-all duration-300 group-hover:scale-x-[1.3] group-hover:transform-origin-left"
          d="M17.6304 7.44983L0.999935 7.44983"
          stroke="#005e61"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </Button>
  );
}
