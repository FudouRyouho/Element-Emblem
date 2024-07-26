import React from "react";

interface Iprops {
  content: string;
  color: string;
  colorHover?: string;
  colorBorder?: string;
  colorOutline?: string;
  colorText?: string;
  shadow?: true;
  layout?: string;
  radius?: string;
  onClick?: () => void;
  customClass?: string;
}

export const ButtonTemplate: React.FC<Iprops> = ({
  customClass,
  content,
  color,
  colorHover,
  colorBorder,
  colorOutline,
  colorText = "white",
  layout = "basic",
  radius = "rounded",
  onClick,
}) => {
  // Definir las estructuras para los colores
  const colorBGList: { [key: string]: string } = {
    slate: "bg-slate-600",
    stone: "bg-stone-600",
    orange: "bg-orange-600",
    amber: "bg-amber-600",
    yellow: "bg-yellow-600",
    lime: "bg-lime-600",
    green: "bg-green-600",
    sky: "bg-sky-600",
  };

  const colorHoverList: { [key: string]: string } = {
    slate: "hover:bg-slate-700",
    stone: "hover:bg-stone-700",
    orange: "hover:bg-orange-700",
    amber: "hover:bg-amber-700",
    yellow: "hover:bg-yellow-700",
    lime: "hover:bg-lime-700",
    green: "hover:bg-green-700",
    sky: "hover:bg-sky-700",
  };

  const colorBorderList: { [key: string]: string } = {
    slate: "border-slate-400 hover:border-slate-600",
    stone: "border-stone-400 hover:border-stone-600",
    orange: "border-orange-400 hover:border-orange-600",
    amber: "border-amber-400 hover:border-amber-600",
    yellow: "border-yellow-400 hover:border-yellow-600",
    lime: "border-lime-400 hover:border-lime-600",
    green: "border-green-400 hover:border-green-600",
    sky: "border-sky-400 hover:border-sky-600",
  };

  const colorOutlineList: { [key: string]: string } = {
    slate: "outline-slate-300 hover:outline-slate-500",
    stone: "outline-stone-300 hover:outline-stone-500",
    orange: "outline-orange-300 hover:outline-orange-500",
    amber: "outline-amber-300 hover:outline-amber-500",
    yellow: "outline-yellow-300 hover:outline-yellow-500",
    lime: "outline-lime-300 hover:outline-lime-500",
    green: "outline-green-300 hover:outline-green-500",
    sky: "outline-sky-300 hover:outline-sky-500",
  };

  const buttonLayoutList: { [key: string]: string } = {
    basic: "py-2 px-4 m-1",
    bordered: "py-2 px-4 m-1 border hover:border-2",
    outline: "py-2 px-4 m-1 outline outline-offset-1 outline-1",
    full: "py-2 px-4 m-1 border-2 hover:border-3 outline outline-offset-1 outline-1",
  };

  const radiusList: { [key: string]: string } = {
    rounded: "rounded",
    xl: "rounded-xl",
    "3xl": "rounded-3xl",
    full: "rounded-full",
    "s-full": "rounded-s-full",
    "e-full": "rounded-e-full",
    "t-full": "rounded-t-full",
    "r-full": "rounded-r-full",
    "b-full": "rounded-b-full",
    "l-full": "rounded-l-full",
    "tl-full": "rounded-tl-full",
    "tr-full": "rounded-tr-full",
    "br-full": "rounded-br-full",
    "bl-full": "rounded-bl-full",
  };

  const colorTextList: { [key: string]: string } = {
    white: "text-white",
    black: "text-black",
  };

  const finalColorHover = colorHover
    ? colorHoverList[colorHover]
    : colorHoverList[color];
  const finalColorBorder = colorBorder
    ? colorBorderList[colorBorder]
    : colorBorderList[color];
  const finalColorOutline = colorOutline
    ? colorOutlineList[colorOutline]
    : colorOutlineList[color];

    
  const combinedClasses2 = [
    layout !== "basic" && layout !== "outline" ? finalColorBorder : "",
    layout !== "bordered" && layout !== "outline" ? colorBGList[color] : "",
    (layout === "outline") ? finalColorOutline : '',
    layout === 'full' ? finalColorOutline : '',
    finalColorHover,
    colorTextList[colorText],
    buttonLayoutList[layout],
    radiusList[radius],
    customClass,
    "font-bold max-w-max justify-self-center",
  ].join(" ");

  return (
    <button className={combinedClasses2} onClick={onClick}>
      {content}
    </button>
  );
};
