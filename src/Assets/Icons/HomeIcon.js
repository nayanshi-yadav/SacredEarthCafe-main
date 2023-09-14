import React from 'react'

const HomeIcon = ({cc}) => {
  return  <svg
  xmlns="http://www.w3.org/2000/svg"
  width="20"
  height="20"
  fill="none"
  viewBox="0 0 20 20"
>
  <path
    stroke={cc ? cc : "#BBB"}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M1.667 2.5h5A3.333 3.333 0 0110 5.833V17.5A2.5 2.5 0 007.5 15H1.667V2.5zM18.333 2.5h-5A3.333 3.333 0 0010 5.833V17.5a2.5 2.5 0 012.5-2.5h5.833V2.5z"
  ></path>
</svg>
}

export default HomeIcon