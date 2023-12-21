import { FC, useState } from "react";
import { useRouter } from "next/router";
import star from "../../../public/static/star.png";
import Image from "next/image";

interface CardProps {
  id: number;
  title: string;
  year: number;
  medium_cover_image: string;
  description: string;
  rating: string;
  genre: string;
  filter: boolean;
}

export const Card: FC<CardProps> = ({
  id,
  title,
  medium_cover_image,
  rating,
  description,
}) => {
  const [mouseOver, setMouseOver] = useState(false);
  const router = useRouter();

  const onCardClick = () => {
    router.push(`/movie/${id}`);
  };

  const toggleMouseOver = () => {
    setMouseOver((prev) => !prev);
  };

  return (
    <div
      className=" bg-white border relative border-black object-cover rounded ml-5 mb-6  relative flex flex-col   hover:shadow-2xl hover:shadow-yellow-400"
      onMouseOut={toggleMouseOver}
      onMouseOver={toggleMouseOver}>
      <Image
        width={300}
        height={200}
        src={medium_cover_image}
        alt={title}
        className=""
      />
      {mouseOver && (
        <div className="absolute  flex-col w-full h-full left-0 top-0 text-2xl bg-stone-300 flex justify-center items-center text-white ">
          <div className="font-extrabold text-2xl mb-3 flex items-center">
            <p className="mr-2"> Rating : {rating}</p>
            <Image
              src={star}
              width={20}
              height={20}
              alt="star"
            />
          </div>
          <button
            onClick={onCardClick}
            className="border-1 p-5 rounded-md cursor-pointer bg-stone-600 ">
            See details
          </button>
        </div>
      )}
    </div>
  );
};
