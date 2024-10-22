import { Button } from "@/components/ui/button";

export function ButtonWithIcon({ children }: { children: React.ReactNode }) {
  return (
    <Button variant={"secondary"}>
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16.768"
        height="16.457"
        viewBox="0 0 16.768 16.457"
      >
        <g
          id="Icon_feather-arrow-up-right"
          data-name="Icon feather-arrow-up-right"
          transform="translate(8.229 -14.099) rotate(45)"
        >
          <path
            id="Path_1378"
            data-name="Path 1378"
            d="M11.03,21.607,9.97,20.546,20.546,9.97l1.061,1.061Z"
            fill="currentColor"
          />
          <path
            id="Path_1379"
            data-name="Path 1379"
            d="M18.5,17.755H17v-6.5H10.5V9.75h8Z"
            fill="currentColor"
            transform="translate(3.322 0)"
          />
        </g>
      </svg>
    </Button>
  );
}
