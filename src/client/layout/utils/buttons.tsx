import React from "react";

interface Iprops {
  content: string;
  color: string;
  onClick?: () => void;
  customClass?: string;
}
//${color}
export const ButtonTemplate: React.FC<Iprops> = ({
  customClass,
  content,
  color,
  onClick,
}) => {
  return (
    <button
      className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 m-1 rounded ${customClass} max-w-max justify-self-center`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};
