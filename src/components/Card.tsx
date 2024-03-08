import React from "react";
import { CardData } from "../models/CardData";
import { IoMdPin } from "react-icons/io";

import placeholder from "../assets/placeholder.webp";

type ImageTileProps = {
  data: CardData;
};

const ImageTile = ({ data }: ImageTileProps) => {
  const resolveImageUrl = () => {
    return data.imageUrl ? `/samples/${data.imageUrl}` : placeholder;
  };

  return (
    <div className="border border-grey cursor-pointer rounded-md transition duration-200 hover:border-blue-400 hover:shadow-md hover:scale-x-105">
      <div>
        <img src={resolveImageUrl()} className="h-36 w-full rounded-t-md" />
      </div>
      <div className="p-3 border-t border-grey">
        <p className="text-xs font-bold leading-relaxed text-primary truncate">
          {data.title}
        </p>
        <div className="flex items-center mt-1">
          <div className="inline-block">
            <IoMdPin className="text-gray-500" />
          </div>
          <div className="inline-block ms-1">
            <p className="text-xs font-bold leading-relaxed text-gray-500">
              {data.location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTile;
