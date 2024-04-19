import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
interface CardProps{
  description: string;
  title: string;
  img: StaticImageData;
  bg: string;
  index: number;
}
export const Card = ({description,img,title, bg, index}:CardProps) => {
  return (
    <div className={cn("relative max-w-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300", index === 4 ? 'col-start-2 col-end-3': '')}>
      <div
        className="w-24  h-24 top-[-48px] left-[37%] shadow-xl flex justify-center items-center bg-white absolute border-white rounded-xl"
      >
        <Image width={100} height={100} alt='' src={img} />
      </div>
      <div className={`max-w-sm ${bg}  dark:bg-gray-400 text-center mt-5 border  px-4 rounded-xl`}>
        <h2 className="text-xl font-semibold mb-2.5 mt-16">{title}</h2>
        <p className="text-lg font-normal h-36 overflow-hidden">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
