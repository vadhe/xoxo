'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
export const NewsCard = ({
  title,
  content,
  coverImage,
  slug
}: {
  title: string;
  content: string;
  coverImage: string;
  slug: string;
}) => {
  const route = useRouter();
  return (
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md">
      <Image
        className="w-full h-64"
        width={300}
        height={200}
        src={coverImage}
        alt="Card Image"
      />
      <div className="p-4">
        <h2 className="text-xl text-left font-semibold mb-2 line-clamp-2">
          {title}
        </h2>
        <p className="text-gray-700 text-left line-clamp-2">{content}</p>
        <div className="flex mt-4 justify-end">
          <Button  onClick={()=> route.push(`/articles/${slug}`)}  className=" w-32 lg:w-fit">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
