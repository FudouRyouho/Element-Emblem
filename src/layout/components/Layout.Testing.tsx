import React from "react";
import { ButtonTemplate } from "../utils/buttons";
interface Iprops {}

const Testing: React.FC<Iprops> = ({}) => {
  return (
    <div className="flex flex-row m-1">
      <div className="flex flex-col m-1 border-2 border-white w-min h-min p-2">
        <p className="font-black text-xl text-center">Colors</p>
        <div className="grid grid-cols-4 grid-rows-10 m-1 border-2 border-white w-max h-max p-2 bg-gray-800/40">
          <p className="font-black text-xl text-center">basic</p>
          <p className="font-black text-xl text-center">bordered</p>
          <p className="font-black text-xl text-center">outline</p>
          <p className="font-black text-xl text-center">full</p>
          <ButtonTemplate content="slate" color="slate" layout="basic" />
          <ButtonTemplate content="slate" color="slate" layout="bordered" />
          <ButtonTemplate content="slate" color="slate" layout="outline" />
          <ButtonTemplate content="slate" color="slate" layout="full"/>
          <ButtonTemplate content="stone" color="stone" layout="basic" />
          <ButtonTemplate content="stone" color="stone" layout="bordered" />
          <ButtonTemplate content="stone" color="stone" layout="outline" />
          <ButtonTemplate content="stone" color="stone" layout="full" />
          <ButtonTemplate content="orange" color="orange" layout="basic" />
          <ButtonTemplate content="orange" color="orange" layout="bordered" />
          <ButtonTemplate content="orange" color="orange" layout="outline" />
          <ButtonTemplate content="orange" color="orange" layout="full" />
          <ButtonTemplate content="amber" color="amber" layout="basic" />
          <ButtonTemplate content="amber" color="amber" layout="bordered" />
          <ButtonTemplate content="orange" color="orange" layout="outline" />
          <ButtonTemplate content="amber" color="amber" layout="full" />
          <ButtonTemplate content="yellow" color="yellow" layout="basic" />
          <ButtonTemplate content="yellow" color="yellow" layout="bordered" />
          <ButtonTemplate content="orange" color="orange" layout="outline" />
          <ButtonTemplate content="yellow" color="yellow" layout="full" />
          <ButtonTemplate content="lime" color="lime" layout="basic" />
          <ButtonTemplate content="lime" color="lime" layout="bordered" />
          <ButtonTemplate content="lime" color="lime" layout="outline" />
          <ButtonTemplate content="lime" color="lime" layout="full" />
          <ButtonTemplate content="green" color="green" layout="basic" />
          <ButtonTemplate content="green" color="green" layout="bordered" />
          <ButtonTemplate content="green" color="green" layout="outline" />
          <ButtonTemplate content="green" color="green" layout="full" />
          <ButtonTemplate content="sky" color="sky" layout="basic" />
          <ButtonTemplate content="sky" color="sky" layout="bordered" />
          <ButtonTemplate content="sky" color="sky" layout="outline" />
          <ButtonTemplate content="sky" color="sky" layout="full" />
        </div>
      </div>

      <div className="flex flex-col m-1 border-2 border-white w-max p-2 bg-gray-800/40">
        <p className="font-black text-xl text-center">Radius</p>
        <div className="grid grid-cols-2 m-1 w-max">
          <div className="grid grid-cols-2 border-2 m-1">
            <ButtonTemplate content="rounded" color="stone" radius="rounded" />
            <ButtonTemplate content="xl" color="stone" radius="xl" />
            <ButtonTemplate content="3xl" color="stone" radius="3xl" />
            <ButtonTemplate content="full" color="stone" radius="full" />
            <ButtonTemplate content="s-full" color="stone" radius="s-full" />
            <ButtonTemplate content="e-full" color="stone" radius="e-full" />
            <ButtonTemplate content="t-full" color="stone" radius="t-full" />
            <ButtonTemplate content="r-full" color="stone" radius="r-full" />
            <ButtonTemplate content="b-full" color="stone" radius="b-full" />
            <ButtonTemplate content="l-full" color="stone" radius="l-full" />
            <ButtonTemplate content="tl-full" color="stone" radius="tl-full" />
            <ButtonTemplate content="tr-full" color="stone" radius="tr-full" />
            <ButtonTemplate content="br-full" color="stone" radius="br-full" />
            <ButtonTemplate content="bl-full" color="stone" radius="bl-full" />
          </div>
          <div className="grid grid-cols-2 border-2 m-1">
            <ButtonTemplate
              content="rounded"
              color="stone"
              layout="bordered"
              radius="rounded"
            />
            <ButtonTemplate
              content="xl"
              color="stone"
              layout="bordered"
              radius="xl"
            />
            <ButtonTemplate
              content="3xl"
              color="stone"
              layout="bordered"
              radius="3xl"
            />
            <ButtonTemplate
              content="full"
              color="stone"
              layout="bordered"
              radius="full"
            />
            <ButtonTemplate
              content="s-full"
              color="stone"
              layout="bordered"
              radius="s-full"
            />
            <ButtonTemplate
              content="e-full"
              color="stone"
              layout="bordered"
              radius="e-full"
            />
            <ButtonTemplate
              content="t-full"
              color="stone"
              layout="bordered"
              radius="t-full"
            />
            <ButtonTemplate
              content="r-full"
              color="stone"
              layout="bordered"
              radius="r-full"
            />
            <ButtonTemplate
              content="b-full"
              color="stone"
              layout="bordered"
              radius="b-full"
            />
            <ButtonTemplate
              content="l-full"
              color="stone"
              layout="bordered"
              radius="l-full"
            />
            <ButtonTemplate
              content="tl-full"
              color="stone"
              layout="bordered"
              radius="tl-full"
            />
            <ButtonTemplate
              content="tr-full"
              color="stone"
              layout="bordered"
              radius="tr-full"
            />
            <ButtonTemplate
              content="br-full"
              color="stone"
              layout="bordered"
              radius="br-full"
            />
            <ButtonTemplate
              content="bl-full"
              color="stone"
              layout="bordered"
              radius="bl-full"
            />
          </div>
          <div className="grid grid-cols-2 border-2 m-1">
            <ButtonTemplate
              content="rounded"
              color="stone"
              layout="full"
              radius="rounded"
            />
            <ButtonTemplate
              content="xl"
              color="stone"
              layout="full"
              radius="xl"
            />
            <ButtonTemplate
              content="3xl"
              color="stone"
              layout="full"
              radius="3xl"
            />
            <ButtonTemplate
              content="full"
              color="stone"
              layout="full"
              radius="full"
            />
            <ButtonTemplate
              content="s-full"
              color="stone"
              layout="full"
              radius="s-full"
            />
            <ButtonTemplate
              content="e-full"
              color="stone"
              layout="full"
              radius="e-full"
            />
            <ButtonTemplate
              content="t-full"
              color="stone"
              layout="full"
              radius="t-full"
            />
            <ButtonTemplate
              content="r-full"
              color="stone"
              layout="full"
              radius="r-full"
            />
            <ButtonTemplate
              content="b-full"
              color="stone"
              layout="full"
              radius="b-full"
            />
            <ButtonTemplate
              content="l-full"
              color="stone"
              layout="full"
              radius="l-full"
            />
            <ButtonTemplate
              content="tl-full"
              color="stone"
              layout="full"
              radius="tl-full"
            />
            <ButtonTemplate
              content="tr-full"
              color="stone"
              layout="full"
              radius="tr-full"
            />
            <ButtonTemplate
              content="br-full"
              color="stone"
              layout="full"
              radius="br-full"
            />
            <ButtonTemplate
              content="bl-full"
              color="stone"
              layout="full"
              radius="bl-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testing;
