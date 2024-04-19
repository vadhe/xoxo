import NewsCard from 'app/components/landing-page/NewsCard';
import { performRequest } from 'app/lib/dato';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SpeakAble Youth',
  description:
    ' Join our Community English Discord Server for language enthusiasts and learners. Practice your English, engage in discussions, and connect with like-minded individuals from around the world.',
  keywords: [
    'Community',
    'English',
    'Discord',
    ' Server',
    'Language',
    'Learning',
    'Discussion',
  ],
  category: 'Website',
  viewport: 'width=device-width, initial-scale=1.0',
  authors: [
    {
      name: 'SpeakAble Youth',
    },
  ],
};
const PAGE_POSTS_QUERY = `
  query posts {
    allPosts{
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

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  const { allPosts }: { allPosts: any[] } = await performRequest({
    query: PAGE_POSTS_QUERY,
  });
  return (
    <>
      <div
        id="articles"
        className=" text-center relative dark:bg-gray-900 pt-6 min-h-screen border-t-4 "
      >
        <h2 className="font-semibold text-lg lg:text-4xl my-12 mb-24">
          ARTICLES
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
      </div>
    </>
  );
}
