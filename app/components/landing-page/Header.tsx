'use client';
import React, { useEffect, useState } from 'react';
import Dictionary from './Dictionary';
import Image from 'next/image';

import {
  useAnimationControls,
  motion,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import { BackgroundBlur } from './BackgroundBlur';

export const Header = () => {
  const controlsHeader = useAnimationControls();
  const controlsDescription = useAnimationControls();
  const controlsDictionary = useAnimationControls();


  const animateX = {
    opacity: 1,
    x: 0,
    transition: { duration: 1.5, ease: 'easeOut' },
  };

  useEffect(() => {
    controlsHeader.start({
      ...animateX,
    });
  }, [controlsHeader]);

  useEffect(() => {
    controlsDescription.start({
      ...animateX,
    });
  }, [controlsDescription]);

  useEffect(() => {
    controlsDictionary.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    });
  }, [controlsDictionary]);

  return (
    <div className="h-screen w-full relative" id="home">
      <div className="absolute  rounded-sm top-0 bottom-0 right-0 left-0  filter blur-xl"></div>
      <div className="absolute  animate-blob h-[45rem] w-[45rem] hidden lg:block top-0 mix-blend-multiply filter blur-xl left-0 bottom-0 rounded-full dark:bg-green-500 bg-green-200 opacity-20"></div>
      <div className="absolute animation-delay-2000 animate-blob h-[45rem] w-[45rem] hidden lg:block top-0 mix-blend-multiply filter blur-xl right-0 -bottom-8 rounded-full dark:bg-pink-500 bg-pink-200 opacity-20"></div>
      <div className="absolute animation-delay-4000 animate-blob h-[45rem] w-[45rem] hidden lg:block top-0 mix-blend-multiply filter blur-xl right-96 bottom-0 rounded-full dark:bg-sky-500 bg-sky-200 opacity-20"></div>
     <div className='lg:hidden'>
     <BackgroundBlur />
     </div>
      <div className="lg:w-1/2 lg:text-center flex flex-col items-center justify-center lg:h-full mx-auto gap-5">
        <motion.h1
          animate={controlsHeader}
          className="lg:text-7xl font-bold mt-4 lg:mt-0"
          initial={{ opacity: 0, x: '-100vw' }}
        >
          WELCOME TO 
        </motion.h1>
        
          <Image src="/images/$XOXO.png" width={300}
          height={200} alt={''}/>
        <motion.p
          className="lg:text-lg p-4 lg:p-0"
          whileHover={{ scale: 1.2 }}
          animate={controlsDescription}
          initial={{ opacity: 0, x: '100vw' }}
        >
         this community as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </motion.p>
        <motion.div
          className="w-full"
          animate={controlsDictionary}
          initial={{ opacity: 0, y: '100vw' }}
        >
        </motion.div>
      </div>
    </div>
  );
};
