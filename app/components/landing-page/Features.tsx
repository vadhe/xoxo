'use client';
import React from 'react';
import Card from './Card';
import BasicClass from '../../../public/images/basic-class.png';
import SpeakingClass from '../../../public/images/speaking-class.png';
import WritingClass from '../../../public/images/writing-class.png';
import ReadingClass from '../../../public/images/reading-class.png';
import EnglishCompetition from '../../../public/images/english-competition.png';
import GameNight from '../../../public/images/game-night.png';
import { BackgroundBlur } from './BackgroundBlur';
import { motion } from 'framer-motion';
const LISTCARDS = [
  {
    title: 'Basic Class',
    description:
      'A class for students who are new to English or who have a very low level of proficiency in English. ',
    img: BasicClass,
    bg: 'bg-pink-100',
  },
  {
    title: 'Speaking Class     ',
    description:
      'A class that focuses on helping students build their fluency, accuracy, and confidence in English.',
    img: SpeakingClass,
    bg: 'bg-green-100',
  },
  {
    title: 'Writing Class    ',
    description:
      'A class that focuses on encouraging you to increase your creativity and gain new vocabulary in English.',
    img: WritingClass,
    bg: 'bg-sky-100',
  },
  {
    title: 'Reading Class',
    description:
      'A class that focuses on teaching students how to read English texts effectively.',
    img: ReadingClass,
    bg: 'bg-pink-100',
  },
  {
    title: 'English Competition    ',
    description:
      'An event in which participants compete in various English such as open mic night and art showcase.',
    img: EnglishCompetition,
    bg: 'bg-green-100',
  },
  {
    title: 'Game Night    ',
    description: 'An activity to gather people to play games together.',
    img: GameNight,
    bg: 'bg-sky-100',
  },
];
export const Features = () => {
  return (
    <div className="border-t-4 border-t-red-600">
      <div
        className="px-6 pb-12 text-center relative dark:bg-gray-900 pt-6"
        id="features"
      >
        <BackgroundBlur />
        <motion.h2
          initial={{ opacity: 0, x: '-70vw' }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, ease: 'easeOut' },
          }}
          viewport={{ once: true }}
          className="font-semibold text-lg lg:text-4xl my-12 mb-24"
        >
          CONTRACT ADDRESS
        </motion.h2>
        <div className='flex gap-5 m-auto border-4 border-pink-600 rounded-full z-50 bg-white text-black w-fit p-4'>
          <p>ATHvNnz88aY1ZmQK28mYjNeWNowpXoyykVdBn9F4Yz2Y</p>
          <button className='border cursor-pointer bg-red-400 rounded-md px-4 py-1 text-white'>copy</button>
        </div>
      </div>
    </div>
  );
};
export default Features;