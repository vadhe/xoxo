'use client';

import React, { useState } from 'react';
import { BackgroundBlur } from './BackgroundBlur';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimateLogo } from './AnimateLogo';
import { InView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
export const About = () => {
  const [isTyping, setIsTyping] = useState(false);

  const textDesktop = `
  Ready to leave ordinary behind? Say yes to 'Exit Liq'
  and let's take this party to the next level! 
  🚀 #ExitLiq #AdventureAwaits
  `;
  const textMobile = `
  Ready to leave ordinary behind? Say yes to 'Exit Liq'
  and let's take this party to the next level! 
  🚀 #ExitLiq #AdventureAwaits
  `;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.04 } },
  };

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="about">
      <div className=" text-center relative dark:bg-gray-900 pt-6 min-h-screen border-t-4 border-t-red-600">
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
          ABOUT 
        </motion.h2>
        <div className="lg:grid grid-cols-2 justify-items-center items-center ">
          <div className="z-50 flex justify-center">
          <Image src="/images/$xoxo.svg" width={300}
          height={200} alt={''}/>
          </div>
          <div className="flex flex-col gap-5 z-50 p-4 lg:p-0">
            <InView
              as="div"
              onChange={(inView, entry) => {
                if (inView === true) {
                  setIsTyping(true);
                }
              }}
              root={null}
              rootMargin="0px"
              threshold={0.8}
              className="lg:w-3/4"
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isTyping ? 'visible' : 'hidden'}
                className="lg:relative lg:text-left"
              >
                {window.innerWidth >= 1440 &&
                  textDesktop.split('').map((char, index) => (
                    <motion.span key={index} variants={charVariants}>
                      {char === ' ' && window.innerWidth >= 1440
                        ? '\u00A0'
                        : char}
                    </motion.span>
                  ))}
                {window.innerWidth < 1440 &&
                  textMobile.split('').map((char, index) => (
                    <motion.span key={index} variants={charVariants}>
                      {char === ' ' && window.innerWidth >= 1440
                        ? '\u00A0'
                        : char}
                    </motion.span>
                  ))}
              </motion.div>
            </InView>
            <a href="https://www.pump.fun/ATHvNnz88aY1ZmQK28mYjNeWNowpXoyykVdBn9F4Yz2Y" target="_blank">
              <Button className="lg:w-1/4 lg:ml-4 w-1/2 mx-auto flex items-center gap-5 bg-pink-600 z-50">
                <span>Buy</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
