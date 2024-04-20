import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';
interface CardProps {
  description: string;
  title: string;
  img: StaticImageData;
  bg: string;
  index: number;
}
export const Card = ({ description, img, title, bg, index }: CardProps) => {
  return (
    <div
      className={cn(
        'relative max-w-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300',
        index === 4 ? 'col-start-2 col-end-3' : ''
      )}
    >
      <div
        className={`max-w-sm ${bg}  dark:bg-gray-400 text-center mt-5 border ml-5  px-4 rounded-xl`}
      >
        <Image
          alt=""
          src={img}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default Card;
