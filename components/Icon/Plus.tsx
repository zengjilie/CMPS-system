import React from "react";

interface iconType {
  className?: string;
  height?: number;
  width?: number;
  onClick?: any;
}

export default function Plus({ className, height, width, onClick }: iconType) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
  );
}
