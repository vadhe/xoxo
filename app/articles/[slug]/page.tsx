import { performRequest } from 'app/lib/dato';
import { ArrowLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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

export default async function DetailArticle({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const PAGE_POSTS_QUERY = `
  {
   post(filter: {slug: {eq: "${slug}"}}) {
    author {
      name
    }
    title
    coverImage {
      url
    }
    content
  }
 }
`;

  const data = await performRequest({
    query: PAGE_POSTS_QUERY,
  });
  return (
    <article className="mb-32  lg:w-4/5 mx-auto flex flex-col space-y-10">
      <div className="flex items-center gap-5">
        <Link href="/articles">
          <ArrowLeft className="h-5 w-5" aria-label="back" />
        </Link>
        <h2 className="text-xl font-semibold">{data.post.title}</h2>
      </div>

      <div className="grid grid-cols-12">
        <Markdown
          className="col-span-12 text-lg px-4 md:px-8 lg:col-span-12  flex flex-col space-y-10"
          components={{
            p(props) {
              const { node, ...rest } = props;
              return <p className="" {...rest} />;
            },
            a(props) {
              const { node, ...rest } = props;
              return (
                <Link href={rest.href ?? '/'} className="text-emerald-700">
                  {rest.children}
                </Link>
              );
            },
            ol(props) {
              const { node, ...rest } = props;
              return <ol {...rest} className="list-decimal" />;
            },
            ul(props) {
              const { node, ...rest } = props;
              return <ul {...rest} className="list-disc" />;
            },
          }}
          remarkPlugins={[remarkGfm]}
        >
          {data.post.content}
        </Markdown>
      </div>
    </article>
  );
}
