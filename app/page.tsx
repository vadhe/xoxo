// import About from './components/landing-page/About';
import { Blog } from './components/landing-page/Blog';
import Features from './components/landing-page/Features';
import { Metadata } from 'next';
import { Header } from './components/landing-page/Header';
import dynamic from 'next/dynamic'
 
const About = dynamic(() => import('./components/landing-page/About')as Promise<any>,
{
  ssr: false,
})
 

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

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <>
    <Header/>
      <Features />
      <About />
      {/* <Blog /> */}
    </>
  );
}
