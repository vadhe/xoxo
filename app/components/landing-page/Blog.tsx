import React from 'react';
import NewsCard from './NewsCard';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { performRequest } from 'app/lib/dato';
import Link from 'next/link';

const PAGE_POSTS_QUERY = `
  query posts {
    allPosts(first: 4){
      id
      title
      _firstPublishedAt
      coverImage {
        url
      }
      author {
        _updatedAt
      }
      content
      slug
    }
  }`;

export const Blog = async () => {
  const { allPosts }: { allPosts: any[] } = await performRequest({
    query: PAGE_POSTS_QUERY,
  });

  return (
    <div
      id="articles"
      className=" text-center relative dark:bg-gray-900 pt-6 min-h-screen border-t-4 border-t-red-600"
    >
      <h2 className="font-semibold text-lg lg:text-4xl my-12 mb-24">
        LATEST ARTICLES
      </h2>
      <div className="px-6 pb-24 text-center mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 md:gap-10 mt-16">
          {allPosts.map((post) => {
            return (
              <NewsCard
                content={post.content}
                title={post.title}
                coverImage={post.coverImage.url}
                slug={post.slug}
              />
            );
          })}
        </div>
      </div>
      <Link href="/articles">
        {' '}
        <Button>SHOW ALL ARTICLES</Button>
      </Link>
    </div>
  );
};
