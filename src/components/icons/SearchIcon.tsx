import React from "react";

interface SearchIconProps {
  pathName?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({ pathName }) => (
  <div
    className={`${
      pathName === "/at-miste"
        ? "text-white hover:text-PrimaryBeige"
        : "text-black hover:text-PrimaryGreen"
    } cursor-pointer`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.156"
      height="23.157"
      viewBox="0 0 23.156 23.157"
    >
      <g id="_x34__4_" transform="translate(0)">
        <g id="Group_11483" data-name="Group 11483" transform="translate(0)">
          <path
            id="Path_1387"
            data-name="Path 1387"
            fill="currentColor"
            d="M22.943,21.9l-5.979-5.883a9.457,9.457,0,0,0,2.528-6.426A9.667,9.667,0,0,0,9.749,0,9.666,9.666,0,0,0,.006,9.588a9.666,9.666,0,0,0,9.743,9.588,9.8,9.8,0,0,0,6.132-2.141l6,5.906a.758.758,0,0,0,1.06,0A.73.73,0,0,0,22.943,21.9ZM9.749,17.7A8.179,8.179,0,0,1,1.505,9.588,8.179,8.179,0,0,1,9.749,1.475a8.179,8.179,0,0,1,8.244,8.113A8.179,8.179,0,0,1,9.749,17.7Z"
            transform="translate(-0.006)"
          />
        </g>
      </g>
    </svg>
  </div>
);

export default SearchIcon;
