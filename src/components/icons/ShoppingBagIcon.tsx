import React from "react";

interface ShoppingBagProps {
  pathName: string;
}

const ShoppingBagIcon: React.FC<ShoppingBagProps> = ({ pathName }) => (
  <div
    className={`${
      pathName === "/at-miste/"
        ? "fill-white hover:fill-PrimaryBeige"
        : "fill-black hover:fill-PrimaryGreen"
    } cursor-pointer`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20.545"
      height="23.157"
      viewBox="0 0 20.545 23.157"
    >
      <path
        id="shopping-bag"
        d="M31.976,17.341a.555.555,0,0,0-.555-.483h-3.06V15.747a4.587,4.587,0,0,0-9.174,0v1.111H16.122a.555.555,0,0,0-.555.483l-2.06,15.627a.555.555,0,0,0,.144.45c.233.25.489.505.766.755a.555.555,0,0,0,.372.144h17.97a.555.555,0,0,0,.372-.144,9,9,0,0,0,.766-.755.555.555,0,0,0,.144-.45Zm-11.662-1.6a3.476,3.476,0,0,1,6.953,0v1.111H20.3Zm12.217,17.47H15.006l-.367-.355,1.966-14.883H30.938L32.9,32.851Z"
        transform="translate(-13.502 -11.16)"
      />
    </svg>
  </div>
);

export default ShoppingBagIcon;
