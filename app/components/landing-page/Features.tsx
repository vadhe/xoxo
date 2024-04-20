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
import { Button } from '@/components/ui/button';

export const Features = () => {
  return (
    <div className="border-t-4 border-t-red-600">
      <div
        className="px-6 pb-12 text-center relative dark:bg-gray-900 pt-6"
        id="features"
      >
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
        <Button className="mt-5 lg:hidden mx-auto flex items-center gap-5 bg-pink-600 z-50">
          ATHvNnz88aY1ZmQK28mYjNeWNowpXo
        </Button>
        <Button className="mt-5 hidden lg:flex mx-auto  items-center gap-5 bg-pink-600 z-50">
          ATHvNnz88aY1ZmQK28mYjNeWNowpXoyykVdBn9F4Yz2Y
        </Button>

        <Button
          onClick={() => {
            navigator.clipboard.writeText(
              'ATHvNnz88aY1ZmQK28mYjNeWNowpXoyykVdBn9F4Yz2Y'
            );
          }}
          className=" mt-5 mx-auto flex items-center gap-5 bg-pink-600 z-50"
        >
          <span>copy</span>
        </Button>
      </div>
    </div>
  );
};
export default Features;
