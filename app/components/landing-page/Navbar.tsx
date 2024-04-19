'use client';

import { renderComponentBasedOnCondition } from 'app/lib/render-component';
import { ArrowUpCircle, Home, ListChecks, ListOrdered, MoonStar, Newspaper, Sun, Users } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BackgroundBlur } from './BackgroundBlur';
import Link from 'next/link';

const Links = [
  {
    name: 'HOME',
    link: 'home',
  },
  // {
  //   name: 'FAQ',
  //   link: 'features',
  // },
  {
    name: 'ABOUT XOXO',
    link: 'about',
  },
  // {
  //   name: 'Articles',
  //   link: 'articles',
  // },
];
const LinksMobile = [
  {
    name: 'Home',
    link: 'home',
    icon: <Home className='w-6 h-6'/>
  },
  // {
  //   name: 'Features',
  //   link: 'features',
  //   icon: <ListOrdered  className='w-6 h-6' />
  // },
  {
    name: 'ABOUT XOXO',
    link: 'about',
    icon: <Users  className='w-6 h-6'/>
  },
  // {
  //   name: 'Articles',
  //   link: 'articles',
  //   icon: <Newspaper  className='w-6 h-6' />
  // },
];
export const Navbar = () => {
  const [scrollY, setScrollY] = useState(window.scrollY);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScrollY(window.scrollY);
    });
  }, [scrollY]);

  return (
    <nav className=" w-full flex items-center justify-between p-4 lg:p-8 sticky lg:relative top-0 z-[100] bg-white dark:bg-black lg:bg-transparent lg:dark:bg-transparent">
     <svg width="80" height="31" viewBox="0 0 80 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_4_4)">
<path d="M10.8555 22.1818V0.363635H12.2532V22.1818H10.8555ZM13.8896 8C13.8441 7.43182 13.631 6.98864 13.2504 6.67045C12.8754 6.35227 12.3043 6.19318 11.5373 6.19318C11.0487 6.19318 10.6481 6.25284 10.3356 6.37216C10.0288 6.4858 9.80149 6.64205 9.65376 6.84091C9.50604 7.03977 9.42933 7.26705 9.42365 7.52273C9.41229 7.73295 9.44922 7.9233 9.53445 8.09375C9.62536 8.25852 9.7674 8.40909 9.96058 8.54545C10.1538 8.67614 10.4009 8.79545 10.7021 8.90341C11.0032 9.01136 11.3612 9.10795 11.7759 9.19318L13.2077 9.5C14.1737 9.70455 15.0004 9.97443 15.6879 10.3097C16.3754 10.6449 16.9379 11.0398 17.3754 11.4943C17.8129 11.9432 18.1339 12.4489 18.3384 13.0114C18.5487 13.5739 18.6566 14.1875 18.6623 14.8523C18.6566 16 18.3697 16.9716 17.8015 17.767C17.2333 18.5625 16.4208 19.1676 15.364 19.5824C14.3129 19.9972 13.0487 20.2045 11.5714 20.2045C10.0543 20.2045 8.73047 19.9801 7.59979 19.5312C6.47479 19.0824 5.59979 18.392 4.97479 17.4602C4.35547 16.5227 4.04297 15.3239 4.03729 13.8636H8.53729C8.5657 14.3977 8.69922 14.8466 8.93786 15.2102C9.17649 15.5739 9.51172 15.8494 9.94354 16.0369C10.381 16.2244 10.9009 16.3182 11.5032 16.3182C12.0089 16.3182 12.4322 16.2557 12.7731 16.1307C13.114 16.0057 13.3725 15.8324 13.5487 15.6108C13.7248 15.3892 13.8157 15.1364 13.8214 14.8523C13.8157 14.5852 13.7276 14.3523 13.5572 14.1534C13.3924 13.9489 13.1197 13.767 12.739 13.608C12.3583 13.4432 11.8441 13.2898 11.1964 13.1477L9.45774 12.7727C7.91229 12.4375 6.69354 11.8778 5.80149 11.0938C4.91513 10.304 4.47479 9.22727 4.48047 7.86364C4.47479 6.75568 4.77024 5.78693 5.36683 4.95739C5.96911 4.12216 6.80149 3.47159 7.86399 3.00568C8.93217 2.53977 10.1566 2.30682 11.5373 2.30682C12.9464 2.30682 14.1651 2.54261 15.1935 3.0142C16.2219 3.4858 17.0146 4.15057 17.5714 5.00852C18.1339 5.8608 18.418 6.85795 18.4237 8H13.8896ZM24.5898 6.90909L26.4989 10.9659L28.5103 6.90909H33.1808L29.6694 13.4545L33.3512 20H28.7148L26.4989 15.8409L24.3512 20H19.6467L23.3626 13.4545L19.8853 6.90909H24.5898ZM40.7148 20.2386C39.2944 20.2386 38.0785 19.9574 37.0671 19.3949C36.0558 18.8267 35.2802 18.0369 34.7404 17.0256C34.2006 16.0085 33.9308 14.8295 33.9308 13.4886C33.9308 12.1477 34.2006 10.9716 34.7404 9.96023C35.2802 8.94318 36.0558 8.15341 37.0671 7.59091C38.0785 7.02273 39.2944 6.73864 40.7148 6.73864C42.1353 6.73864 43.3512 7.02273 44.3626 7.59091C45.3739 8.15341 46.1495 8.94318 46.6893 9.96023C47.229 10.9716 47.4989 12.1477 47.4989 13.4886C47.4989 14.8295 47.229 16.0085 46.6893 17.0256C46.1495 18.0369 45.3739 18.8267 44.3626 19.3949C43.3512 19.9574 42.1353 20.2386 40.7148 20.2386ZM40.7489 16.7614C41.1467 16.7614 41.4904 16.6278 41.7802 16.3608C42.07 16.0937 42.2944 15.7131 42.4535 15.2188C42.6126 14.7244 42.6921 14.1364 42.6921 13.4545C42.6921 12.767 42.6126 12.179 42.4535 11.6903C42.2944 11.196 42.07 10.8153 41.7802 10.5483C41.4904 10.2812 41.1467 10.1477 40.7489 10.1477C40.3285 10.1477 39.9677 10.2812 39.6665 10.5483C39.3654 10.8153 39.1353 11.196 38.9762 11.6903C38.8171 12.179 38.7376 12.767 38.7376 13.4545C38.7376 14.1364 38.8171 14.7244 38.9762 15.2188C39.1353 15.7131 39.3654 16.0937 39.6665 16.3608C39.9677 16.6278 40.3285 16.7614 40.7489 16.7614ZM53.0195 6.90909L54.9286 10.9659L56.94 6.90909H61.6104L58.0991 13.4545L61.7809 20H57.1445L54.9286 15.8409L52.7809 20H48.0763L51.7923 13.4545L48.315 6.90909H53.0195ZM69.1445 20.2386C67.7241 20.2386 66.5082 19.9574 65.4968 19.3949C64.4854 18.8267 63.7099 18.0369 63.1701 17.0256C62.6303 16.0085 62.3604 14.8295 62.3604 13.4886C62.3604 12.1477 62.6303 10.9716 63.1701 9.96023C63.7099 8.94318 64.4854 8.15341 65.4968 7.59091C66.5082 7.02273 67.7241 6.73864 69.1445 6.73864C70.565 6.73864 71.7809 7.02273 72.7923 7.59091C73.8036 8.15341 74.5792 8.94318 75.119 9.96023C75.6587 10.9716 75.9286 12.1477 75.9286 13.4886C75.9286 14.8295 75.6587 16.0085 75.119 17.0256C74.5792 18.0369 73.8036 18.8267 72.7923 19.3949C71.7809 19.9574 70.565 20.2386 69.1445 20.2386ZM69.1786 16.7614C69.5763 16.7614 69.9201 16.6278 70.2099 16.3608C70.4996 16.0937 70.7241 15.7131 70.8832 15.2188C71.0423 14.7244 71.1218 14.1364 71.1218 13.4545C71.1218 12.767 71.0423 12.179 70.8832 11.6903C70.7241 11.196 70.4996 10.8153 70.2099 10.5483C69.9201 10.2812 69.5763 10.1477 69.1786 10.1477C68.7582 10.1477 68.3974 10.2812 68.0962 10.5483C67.7951 10.8153 67.565 11.196 67.4059 11.6903C67.2468 12.179 67.1673 12.767 67.1673 13.4545C67.1673 14.1364 67.2468 14.7244 67.4059 15.2188C67.565 15.7131 67.7951 16.0937 68.0962 16.3608C68.3974 16.6278 68.7582 16.7614 69.1786 16.7614Z" fill="#F5F5F5"/>
<path d="M10.8555 22.1818H10.3555V22.6818H10.8555V22.1818ZM10.8555 0.363635V-0.136365H10.3555V0.363635H10.8555ZM12.2532 0.363635H12.7532V-0.136365H12.2532V0.363635ZM12.2532 22.1818V22.6818H12.7532V22.1818H12.2532ZM13.8896 8L13.3912 8.03987L13.428 8.5H13.8896V8ZM13.2504 6.67045L12.9269 7.05172L12.9297 7.05409L13.2504 6.67045ZM10.3356 6.37216L10.5092 6.84106L10.5139 6.83927L10.3356 6.37216ZM9.65376 6.84091L9.25239 6.54275L9.25239 6.54275L9.65376 6.84091ZM9.42365 7.52273L9.92292 7.54971L9.92335 7.54178L9.92353 7.53384L9.42365 7.52273ZM9.53445 8.09375L9.08723 8.31736L9.09176 8.32642L9.09666 8.33529L9.53445 8.09375ZM9.96058 8.54545L9.67218 8.95402L9.68043 8.9596L9.96058 8.54545ZM11.7759 9.19318L11.8807 8.70426L11.8766 8.70341L11.7759 9.19318ZM13.2077 9.5L13.103 9.9889L13.1042 9.98915L13.2077 9.5ZM17.3754 11.4943L17.0151 11.8411L17.0173 11.8433L17.3754 11.4943ZM18.3384 13.0114L17.8685 13.1822L17.8701 13.1864L18.3384 13.0114ZM18.6623 14.8523L19.1623 14.8547L19.1623 14.848L18.6623 14.8523ZM17.8015 17.767L18.2084 18.0577L18.2084 18.0577L17.8015 17.767ZM15.364 19.5824L15.1813 19.1169L15.1805 19.1173L15.364 19.5824ZM7.59979 19.5312L7.4145 19.9957L7.4153 19.996L7.59979 19.5312ZM4.97479 17.4602L4.55759 17.7358L4.55954 17.7387L4.97479 17.4602ZM4.03729 13.8636V13.3636H3.53534L3.53729 13.8656L4.03729 13.8636ZM8.53729 13.8636L9.03658 13.8371L9.0114 13.3636H8.53729V13.8636ZM8.93786 15.2102L8.51983 15.4846L8.51983 15.4846L8.93786 15.2102ZM9.94354 16.0369L9.74439 16.4956L9.74658 16.4965L9.94354 16.0369ZM12.7731 16.1307L12.9452 16.6001L12.9452 16.6001L12.7731 16.1307ZM13.5487 15.6108L13.9401 15.9219L13.9401 15.9219L13.5487 15.6108ZM13.8214 14.8523L14.3213 14.8623L14.3215 14.852L14.3213 14.8416L13.8214 14.8523ZM13.5572 14.1534L13.1678 14.4671L13.1726 14.473L13.1775 14.4788L13.5572 14.1534ZM12.739 13.608L12.5404 14.0669L12.5462 14.0693L12.739 13.608ZM11.1964 13.1477L11.3035 12.6593L11.3018 12.659L11.1964 13.1477ZM9.45774 12.7727L9.35175 13.2614L9.35232 13.2615L9.45774 12.7727ZM5.80149 11.0938L5.46886 11.4671L5.47139 11.4693L5.80149 11.0938ZM4.48047 7.86364L4.98049 7.86572L4.98046 7.86107L4.48047 7.86364ZM5.36683 4.95739L4.96127 4.66494L4.96091 4.66545L5.36683 4.95739ZM7.86399 3.00568L7.66409 2.54738L7.6632 2.54777L7.86399 3.00568ZM15.1935 3.0142L14.9851 3.4687L14.9851 3.4687L15.1935 3.0142ZM17.5714 5.00852L17.152 5.28073L17.1541 5.28394L17.5714 5.00852ZM18.4237 8V8.5H18.9261L18.9236 7.99751L18.4237 8ZM11.3555 22.1818V0.363635H10.3555V22.1818H11.3555ZM10.8555 0.863635H12.2532V-0.136365H10.8555V0.863635ZM11.7532 0.363635V22.1818H12.7532V0.363635H11.7532ZM12.2532 21.6818H10.8555V22.6818H12.2532V21.6818ZM14.388 7.96013C14.3335 7.27981 14.0702 6.70409 13.571 6.28681L12.9297 7.05409C13.1918 7.27318 13.3547 7.58382 13.3912 8.03987L14.388 7.96013ZM13.5738 6.2892C13.0699 5.86161 12.3598 5.69318 11.5373 5.69318V6.69318C12.2489 6.69318 12.6808 6.84294 12.9269 7.05171L13.5738 6.2892ZM11.5373 5.69318C11.0133 5.69318 10.5465 5.75642 10.1572 5.90505L10.5139 6.83927C10.7497 6.74926 11.084 6.69318 11.5373 6.69318V5.69318ZM10.1619 5.90328C9.79285 6.03998 9.47371 6.24482 9.25239 6.54275L10.0551 7.13907C10.1293 7.03927 10.2647 6.93161 10.5092 6.84103L10.1619 5.90328ZM9.25239 6.54275C9.04078 6.8276 8.93168 7.15593 8.92377 7.51162L9.92353 7.53384C9.92699 7.37816 9.97129 7.25194 10.0551 7.13907L9.25239 6.54275ZM8.92438 7.49574C8.90884 7.7833 8.95924 8.06138 9.08723 8.31736L9.98166 7.87014C9.93919 7.78521 9.91574 7.68261 9.92292 7.54971L8.92438 7.49574ZM9.09666 8.33529C9.23225 8.58106 9.43269 8.78484 9.67224 8.95394L10.2489 8.13697C10.1021 8.03334 10.0185 7.93599 9.97224 7.85221L9.09666 8.33529ZM9.68043 8.9596C9.91836 9.12055 10.2063 9.25684 10.5333 9.37408L10.8708 8.43274C10.5956 8.33407 10.3892 8.23172 10.2407 8.13131L9.68043 8.9596ZM10.5333 9.37408C10.8625 9.49207 11.2443 9.59439 11.6753 9.68295L11.8766 8.70341C11.478 8.62152 11.1439 8.53066 10.8708 8.43274L10.5333 9.37408ZM11.6712 9.68208L13.103 9.9889L13.3125 9.0111L11.8807 8.70428L11.6712 9.68208ZM13.1042 9.98915C14.041 10.1875 14.8268 10.4461 15.4687 10.7591L15.907 9.86024C15.1739 9.50278 14.3063 9.22155 13.3113 9.01085L13.1042 9.98915ZM15.4687 10.7591C16.1144 11.0739 16.6259 11.4366 17.0151 11.8411L17.7356 11.1476C17.2498 10.6429 16.6363 10.2159 15.907 9.86024L15.4687 10.7591ZM17.0173 11.8433C17.4077 12.2439 17.6894 12.6895 17.8685 13.1822L18.8083 12.8405C18.5784 12.2082 18.218 11.6425 17.7334 11.1453L17.0173 11.8433ZM17.8701 13.1864C18.0578 13.6887 18.1571 14.2439 18.1623 14.8565L19.1623 14.848C19.1561 14.1311 19.0395 13.459 18.8068 12.8363L17.8701 13.1864ZM18.1623 14.8498C18.157 15.9127 17.8928 16.779 17.3946 17.4764L18.2084 18.0577C18.8465 17.1642 19.1562 16.0873 19.1623 14.8547L18.1623 14.8498ZM17.3946 17.4764C16.8913 18.1811 16.1629 18.7317 15.1813 19.1169L15.5467 20.0478C16.6787 19.6035 17.5753 18.9439 18.2084 18.0577L17.3946 17.4764ZM15.1805 19.1173C14.2027 19.5031 13.0042 19.7045 11.5714 19.7045V20.7045C13.0931 20.7045 14.423 20.4912 15.5475 20.0475L15.1805 19.1173ZM11.5714 19.7045C10.1025 19.7045 8.84371 19.4871 7.78427 19.0665L7.4153 19.996C8.61723 20.4731 10.0062 20.7045 11.5714 20.7045V19.7045ZM7.78508 19.0669C6.7459 18.6522 5.95436 18.0231 5.39003 17.1817L4.55954 17.7387C5.24521 18.761 6.20368 19.5125 7.4145 19.9956L7.78508 19.0669ZM5.39198 17.1846C4.84023 16.3494 4.5427 15.2534 4.53728 13.8617L3.53729 13.8656C3.54324 15.3944 3.87071 16.696 4.5576 17.7358L5.39198 17.1846ZM4.03729 14.3636H8.53729V13.3636H4.03729V14.3636ZM8.03799 13.8902C8.07003 14.4924 8.22267 15.0317 8.51983 15.4846L9.35588 14.9359C9.17577 14.6614 9.06136 14.303 9.03658 13.8371L8.03799 13.8902ZM8.51983 15.4846C8.81634 15.9364 9.23091 16.2726 9.74439 16.4956L10.1427 15.5783C9.79253 15.4263 9.53665 15.2114 9.35588 14.9359L8.51983 15.4846ZM9.74658 16.4965C10.2605 16.7167 10.8505 16.8182 11.5032 16.8182V15.8182C10.9513 15.8182 10.5016 15.7321 10.1405 15.5774L9.74658 16.4965ZM11.5032 16.8182C12.0463 16.8182 12.5322 16.7516 12.9452 16.6001L12.601 15.6612C12.3322 15.7598 11.9715 15.8182 11.5032 15.8182V16.8182ZM12.9452 16.6001C13.3484 16.4523 13.6927 16.2331 13.9401 15.9219L13.1572 15.2997C13.0523 15.4317 12.8796 15.5591 12.601 15.6612L12.9452 16.6001ZM13.9401 15.9219C14.1847 15.6142 14.3134 15.2555 14.3213 14.8623L13.3215 14.8423C13.318 15.0173 13.2649 15.1642 13.1572 15.2997L13.9401 15.9219ZM14.3213 14.8416C14.3132 14.4614 14.1842 14.1166 13.9368 13.828L13.1775 14.4788C13.2711 14.5879 13.3182 14.709 13.3215 14.8629L14.3213 14.8416ZM13.9466 13.8397C13.708 13.5436 13.3496 13.3212 12.9318 13.1466L12.5462 14.0693C12.8897 14.2129 13.0768 14.3541 13.1678 14.4671L13.9466 13.8397ZM12.9376 13.1491C12.5153 12.9663 11.9664 12.8047 11.3035 12.6593L11.0893 13.6361C11.7219 13.7748 12.2013 13.92 12.5404 14.0668L12.9376 13.1491ZM11.3018 12.659L9.56316 12.284L9.35232 13.2615L11.091 13.6365L11.3018 12.659ZM9.56373 12.2841C8.07482 11.9611 6.94206 11.4306 6.13159 10.7182L5.47139 11.4693C6.44502 12.3251 7.74976 12.9139 9.35175 13.2614L9.56373 12.2841ZM6.13412 10.7204C5.37121 10.0407 4.97528 9.10961 4.98046 7.86572L3.98047 7.86155C3.97429 9.34494 4.45905 10.5673 5.46886 11.4671L6.13412 10.7204ZM4.98046 7.86107C4.97527 6.84935 5.24312 5.98577 5.77276 5.24932L4.96091 4.66545C4.29736 5.5881 3.9743 6.66201 3.98048 7.8662L4.98046 7.86107ZM5.77239 5.24983C6.31604 4.4959 7.0735 3.89827 8.06479 3.46359L7.6632 2.54777C6.52948 3.04491 5.62217 3.74842 4.96127 4.66494L5.77239 5.24983ZM8.06389 3.46398C9.05847 3.03018 10.2129 2.80682 11.5373 2.80682V1.80682C10.1003 1.80682 8.80587 2.04937 7.66409 2.54738L8.06389 3.46398ZM11.5373 2.80682C12.8916 2.80682 14.0361 3.03351 14.9851 3.4687L15.402 2.55971C14.2942 2.05172 13.0011 1.80682 11.5373 1.80682V2.80682ZM14.9851 3.4687C15.9368 3.9051 16.6522 4.51062 17.152 5.28072L17.9908 4.73632C17.377 3.79052 16.5071 3.06649 15.402 2.55971L14.9851 3.4687ZM17.1541 5.28394C17.6569 6.04581 17.9184 6.94563 17.9237 8.00249L18.9236 7.99751C18.9175 6.77028 18.6108 5.67578 17.9887 4.7331L17.1541 5.28394ZM18.4237 7.5H13.8896V8.5H18.4237V7.5ZM24.5898 6.90909L25.0423 6.69619L24.9071 6.40909H24.5898V6.90909ZM26.4989 10.9659L26.0465 11.1788L26.4872 12.1152L26.9469 11.188L26.4989 10.9659ZM28.5103 6.90909V6.40909H28.2001L28.0623 6.68699L28.5103 6.90909ZM33.1808 6.90909L33.6214 7.14546L34.0164 6.40909H33.1808V6.90909ZM29.6694 13.4545L29.2288 13.2182L29.0989 13.4603L29.2336 13.6997L29.6694 13.4545ZM33.3512 20V20.5H34.2061L33.787 19.7549L33.3512 20ZM28.7148 20L28.2736 20.2351L28.4147 20.5H28.7148V20ZM26.4989 15.8409L26.9402 15.6058L26.492 14.7646L26.0547 15.6115L26.4989 15.8409ZM24.3512 20V20.5H24.6557L24.7955 20.2294L24.3512 20ZM19.6467 20L19.2118 19.7532L18.7879 20.5H19.6467V20ZM23.3626 13.4545L23.7974 13.7014L23.933 13.4625L23.8041 13.22L23.3626 13.4545ZM19.8853 6.90909V6.40909H19.0535L19.4437 7.14367L19.8853 6.90909ZM24.1374 7.12199L26.0465 11.1788L26.9513 10.753L25.0423 6.69619L24.1374 7.12199ZM26.9469 11.188L28.9583 7.13119L28.0623 6.68699L26.051 10.7438L26.9469 11.188ZM28.5103 7.40909H33.1808V6.40909H28.5103V7.40909ZM32.7401 6.67273L29.2288 13.2182L30.11 13.6909L33.6214 7.14546L32.7401 6.67273ZM29.2336 13.6997L32.9154 20.2451L33.787 19.7549L30.1052 13.2094L29.2336 13.6997ZM33.3512 19.5H28.7148V20.5H33.3512V19.5ZM29.1561 19.7649L26.9402 15.6058L26.0577 16.076L28.2736 20.2351L29.1561 19.7649ZM26.0547 15.6115L23.9069 19.7706L24.7955 20.2294L26.9432 16.0703L26.0547 15.6115ZM24.3512 19.5H19.6467V20.5H24.3512V19.5ZM20.0815 20.2468L23.7974 13.7014L22.9278 13.2077L19.2118 19.7532L20.0815 20.2468ZM23.8041 13.22L20.3269 6.67451L19.4437 7.14367L22.921 13.6891L23.8041 13.22ZM19.8853 7.40909H24.5898V6.40909H19.8853V7.40909ZM37.0671 19.3949L36.8222 19.8308L36.8241 19.8318L37.0671 19.3949ZM34.7404 17.0256L34.2988 17.26L34.2993 17.261L34.7404 17.0256ZM34.7404 9.96023L35.1815 10.1957L35.1821 10.1946L34.7404 9.96023ZM37.0671 7.59091L37.3101 8.02787L37.312 8.02683L37.0671 7.59091ZM44.3626 7.59091L44.1177 8.02683L44.1195 8.02787L44.3626 7.59091ZM46.6893 9.96023L46.2476 10.1946L46.2482 10.1956L46.6893 9.96023ZM46.6893 17.0256L47.1304 17.261L47.1309 17.26L46.6893 17.0256ZM44.3626 19.3949L44.6056 19.8319L44.6075 19.8308L44.3626 19.3949ZM41.7802 16.3608L42.119 16.7285L42.119 16.7285L41.7802 16.3608ZM42.4535 15.2188L42.9294 15.3719L42.9294 15.3719L42.4535 15.2188ZM42.4535 11.6903L41.9775 11.8435L41.978 11.8451L42.4535 11.6903ZM41.7802 10.5483L42.119 10.1806L42.119 10.1806L41.7802 10.5483ZM38.9762 11.6903L39.4516 11.8451L39.4522 11.8435L38.9762 11.6903ZM38.9762 15.2188L39.4522 15.0656L39.4522 15.0656L38.9762 15.2188ZM40.7148 19.7386C39.3603 19.7386 38.2321 19.4707 37.3101 18.9579L36.8241 19.8318C37.9249 20.4441 39.2285 20.7386 40.7148 20.7386V19.7386ZM37.312 18.959C36.3828 18.4369 35.6758 17.7163 35.1815 16.7901L34.2993 17.261C34.8846 18.3576 35.7287 19.2165 36.8222 19.8308L37.312 18.959ZM35.1821 16.7912C34.6865 15.8574 34.4308 14.7613 34.4308 13.4886H33.4308C33.4308 14.8978 33.7148 16.1597 34.2988 17.26L35.1821 16.7912ZM34.4308 13.4886C34.4308 12.2159 34.6865 11.1232 35.1815 10.1956L34.2993 9.7248C33.7148 10.82 33.4308 12.0796 33.4308 13.4886H34.4308ZM35.1821 10.1946C35.6763 9.26332 36.3827 8.5437 37.3101 8.02787L36.8241 7.15395C35.7288 7.76312 34.884 8.62304 34.2988 9.72583L35.1821 10.1946ZM37.312 8.02683C38.2335 7.50912 39.3611 7.23864 40.7148 7.23864V6.23864C39.2277 6.23864 37.9234 6.53633 36.8222 7.15499L37.312 8.02683ZM40.7148 7.23864C42.0686 7.23864 43.1962 7.50912 44.1177 8.02683L44.6075 7.15499C43.5063 6.53633 42.202 6.23864 40.7148 6.23864V7.23864ZM44.1195 8.02787C45.047 8.5437 45.7534 9.26332 46.2476 10.1946L47.1309 9.72583C46.5457 8.62304 45.7009 7.76312 44.6056 7.15395L44.1195 8.02787ZM46.2482 10.1956C46.7432 11.1232 46.9989 12.2159 46.9989 13.4886H47.9989C47.9989 12.0796 47.7149 10.82 47.1304 9.7248L46.2482 10.1956ZM46.9989 13.4886C46.9989 14.7613 46.7432 15.8574 46.2476 16.7912L47.1309 17.26C47.7149 16.1597 47.9989 14.8978 47.9989 13.4886H46.9989ZM46.2482 16.7901C45.7539 17.7163 45.0469 18.4369 44.1177 18.959L44.6075 19.8308C45.701 19.2165 46.5451 18.3576 47.1304 17.261L46.2482 16.7901ZM44.1195 18.9579C43.1976 19.4707 42.0694 19.7386 40.7148 19.7386V20.7386C42.2012 20.7386 43.5048 20.4441 44.6056 19.8318L44.1195 18.9579ZM40.7489 17.2614C41.2709 17.2614 41.736 17.0815 42.119 16.7285L41.4413 15.9931C41.2448 16.1742 41.0224 16.2614 40.7489 16.2614V17.2614ZM42.119 16.7285C42.4893 16.3873 42.7521 15.9231 42.9294 15.3719L41.9775 15.0656C41.8367 15.503 41.6506 15.8002 41.4413 15.9931L42.119 16.7285ZM42.9294 15.3719C43.1086 14.8154 43.1921 14.1731 43.1921 13.4545H42.1921C42.1921 14.0997 42.1166 14.6335 41.9775 15.0656L42.9294 15.3719ZM43.1921 13.4545C43.1921 12.7311 43.1087 12.0878 42.9289 11.5355L41.978 11.8451C42.1164 12.2701 42.1921 12.803 42.1921 13.4545H43.1921ZM42.9294 11.5372C42.7521 10.986 42.4893 10.5218 42.119 10.1806L41.4413 10.916C41.6506 11.1089 41.8367 11.406 41.9775 11.8435L42.9294 11.5372ZM42.119 10.1806C41.736 9.82761 41.2709 9.64773 40.7489 9.64773V10.6477C41.0224 10.6477 41.2448 10.7349 41.4413 10.916L42.119 10.1806ZM40.7489 9.64773C40.2122 9.64773 39.7318 9.82216 39.3348 10.1742L39.9983 10.9224C40.2036 10.7403 40.4448 10.6477 40.7489 10.6477V9.64773ZM39.3348 10.1742C38.9499 10.5155 38.679 10.9819 38.5003 11.5372L39.4522 11.8435C39.5916 11.4102 39.7809 11.1152 39.9983 10.9224L39.3348 10.1742ZM38.5008 11.5355C38.321 12.0878 38.2376 12.7311 38.2376 13.4545H39.2376C39.2376 12.803 39.3133 12.2701 39.4516 11.8451L38.5008 11.5355ZM38.2376 13.4545C38.2376 14.1731 38.3211 14.8154 38.5003 15.3719L39.4522 15.0656C39.3131 14.6335 39.2376 14.0997 39.2376 13.4545H38.2376ZM38.5003 15.3719C38.679 15.9272 38.9499 16.3936 39.3348 16.7349L39.9983 15.9867C39.7809 15.7939 39.5916 15.4989 39.4522 15.0656L38.5003 15.3719ZM39.3348 16.7349C39.7318 17.0869 40.2122 17.2614 40.7489 17.2614V16.2614C40.4448 16.2614 40.2036 16.1688 39.9983 15.9867L39.3348 16.7349ZM53.0195 6.90909L53.4719 6.69619L53.3368 6.40909H53.0195V6.90909ZM54.9286 10.9659L54.4762 11.1788L54.9169 12.1152L55.3766 11.188L54.9286 10.9659ZM56.94 6.90909V6.40909H56.6298L56.492 6.68699L56.94 6.90909ZM61.6104 6.90909L62.051 7.14546L62.4461 6.40909H61.6104V6.90909ZM58.0991 13.4545L57.6585 13.2182L57.5286 13.4603L57.6633 13.6997L58.0991 13.4545ZM61.7809 20V20.5H62.6358L62.2167 19.7549L61.7809 20ZM57.1445 20L56.7033 20.2351L56.8444 20.5H57.1445V20ZM54.9286 15.8409L55.3699 15.6058L54.9217 14.7646L54.4844 15.6115L54.9286 15.8409ZM52.7809 20V20.5H53.0854L53.2252 20.2294L52.7809 20ZM48.0763 20L47.6415 19.7532L47.2175 20.5H48.0763V20ZM51.7923 13.4545L52.2271 13.7014L52.3627 13.4625L52.2338 13.22L51.7923 13.4545ZM48.315 6.90909V6.40909H47.4832L47.8734 7.14367L48.315 6.90909ZM52.5671 7.12199L54.4762 11.1788L55.381 10.753L53.4719 6.69619L52.5671 7.12199ZM55.3766 11.188L57.3879 7.13119L56.492 6.68699L54.4807 10.7438L55.3766 11.188ZM56.94 7.40909H61.6104V6.40909H56.94V7.40909ZM61.1698 6.67273L57.6585 13.2182L58.5397 13.6909L62.051 7.14546L61.1698 6.67273ZM57.6633 13.6997L61.3451 20.2451L62.2167 19.7549L58.5349 13.2094L57.6633 13.6997ZM61.7809 19.5H57.1445V20.5H61.7809V19.5ZM57.5858 19.7649L55.3699 15.6058L54.4873 16.076L56.7033 20.2351L57.5858 19.7649ZM54.4844 15.6115L52.3366 19.7706L53.2252 20.2294L55.3729 16.0703L54.4844 15.6115ZM52.7809 19.5H48.0763V20.5H52.7809V19.5ZM48.5112 20.2468L52.2271 13.7014L51.3574 13.2077L47.6415 19.7532L48.5112 20.2468ZM52.2338 13.22L48.7565 6.67451L47.8734 7.14367L51.3507 13.6891L52.2338 13.22ZM48.315 7.40909H53.0195V6.40909H48.315V7.40909ZM65.4968 19.3949L65.2519 19.8308L65.2538 19.8318L65.4968 19.3949ZM63.1701 17.0256L62.7284 17.26L62.729 17.261L63.1701 17.0256ZM63.1701 9.96023L63.6112 10.1957L63.6118 10.1946L63.1701 9.96023ZM65.4968 7.59091L65.7398 8.02787L65.7417 8.02683L65.4968 7.59091ZM72.7923 7.59091L72.5474 8.02683L72.5492 8.02787L72.7923 7.59091ZM75.119 9.96023L74.6773 10.1946L74.6779 10.1956L75.119 9.96023ZM75.119 17.0256L75.5601 17.261L75.5606 17.26L75.119 17.0256ZM72.7923 19.3949L73.0353 19.8319L73.0372 19.8308L72.7923 19.3949ZM70.2099 16.3608L70.5487 16.7285L70.5487 16.7285L70.2099 16.3608ZM70.8832 15.2188L71.3591 15.3719L71.3591 15.3719L70.8832 15.2188ZM70.8832 11.6903L70.4072 11.8435L70.4077 11.8451L70.8832 11.6903ZM70.2099 10.5483L70.5487 10.1806L70.5487 10.1806L70.2099 10.5483ZM67.4059 11.6903L67.8813 11.8451L67.8819 11.8435L67.4059 11.6903ZM67.4059 15.2188L67.8819 15.0656L67.8819 15.0656L67.4059 15.2188ZM69.1445 19.7386C67.79 19.7386 66.6617 19.4707 65.7398 18.9579L65.2538 19.8318C66.3546 20.4441 67.6582 20.7386 69.1445 20.7386V19.7386ZM65.7417 18.959C64.8125 18.4369 64.1055 17.7163 63.6112 16.7901L62.729 17.261C63.3143 18.3576 64.1584 19.2165 65.2519 19.8308L65.7417 18.959ZM63.6118 16.7912C63.1162 15.8574 62.8604 14.7613 62.8604 13.4886H61.8604C61.8604 14.8978 62.1445 16.1597 62.7284 17.26L63.6118 16.7912ZM62.8604 13.4886C62.8604 12.2159 63.1162 11.1232 63.6112 10.1956L62.729 9.7248C62.1445 10.82 61.8604 12.0796 61.8604 13.4886H62.8604ZM63.6118 10.1946C64.106 9.26332 64.8124 8.5437 65.7398 8.02787L65.2538 7.15395C64.1585 7.76312 63.3137 8.62304 62.7284 9.72583L63.6118 10.1946ZM65.7417 8.02683C66.6632 7.50912 67.7907 7.23864 69.1445 7.23864V6.23864C67.6574 6.23864 66.3531 6.53633 65.2519 7.15499L65.7417 8.02683ZM69.1445 7.23864C70.4983 7.23864 71.6258 7.50912 72.5474 8.02683L73.0372 7.15499C71.9359 6.53633 70.6317 6.23864 69.1445 6.23864V7.23864ZM72.5492 8.02787C73.4767 8.5437 74.183 9.26332 74.6773 10.1946L75.5606 9.72583C74.9753 8.62304 74.1306 7.76312 73.0353 7.15395L72.5492 8.02787ZM74.6779 10.1956C75.1729 11.1232 75.4286 12.2159 75.4286 13.4886H76.4286C76.4286 12.0796 76.1446 10.82 75.5601 9.7248L74.6779 10.1956ZM75.4286 13.4886C75.4286 14.7613 75.1729 15.8574 74.6773 16.7912L75.5606 17.26C76.1446 16.1597 76.4286 14.8978 76.4286 13.4886H75.4286ZM74.6779 16.7901C74.1836 17.7163 73.4766 18.4369 72.5474 18.959L73.0372 19.8308C74.1307 19.2165 74.9748 18.3576 75.5601 17.261L74.6779 16.7901ZM72.5492 18.9579C71.6273 19.4707 70.4991 19.7386 69.1445 19.7386V20.7386C70.6309 20.7386 71.9345 20.4441 73.0353 19.8318L72.5492 18.9579ZM69.1786 17.2614C69.7006 17.2614 70.1657 17.0815 70.5487 16.7285L69.871 15.9931C69.6745 16.1742 69.4521 16.2614 69.1786 16.2614V17.2614ZM70.5487 16.7285C70.919 16.3873 71.1817 15.9231 71.3591 15.3719L70.4072 15.0656C70.2664 15.503 70.0803 15.8002 69.871 15.9931L70.5487 16.7285ZM71.3591 15.3719C71.5382 14.8154 71.6218 14.1731 71.6218 13.4545H70.6218C70.6218 14.0997 70.5463 14.6335 70.4072 15.0656L71.3591 15.3719ZM71.6218 13.4545C71.6218 12.7311 71.5384 12.0878 71.3586 11.5355L70.4077 11.8451C70.5461 12.2701 70.6218 12.803 70.6218 13.4545H71.6218ZM71.3591 11.5372C71.1817 10.986 70.919 10.5218 70.5487 10.1806L69.871 10.916C70.0803 11.1089 70.2664 11.406 70.4072 11.8435L71.3591 11.5372ZM70.5487 10.1806C70.1657 9.82761 69.7006 9.64773 69.1786 9.64773V10.6477C69.4521 10.6477 69.6745 10.7349 69.871 10.916L70.5487 10.1806ZM69.1786 9.64773C68.6419 9.64773 68.1615 9.82216 67.7645 10.1742L68.428 10.9224C68.6333 10.7403 68.8745 10.6477 69.1786 10.6477V9.64773ZM67.7645 10.1742C67.3796 10.5155 67.1087 10.9819 66.9299 11.5372L67.8819 11.8435C68.0213 11.4102 68.2106 11.1152 68.428 10.9224L67.7645 10.1742ZM66.9305 11.5355C66.7506 12.0878 66.6673 12.7311 66.6673 13.4545H67.6673C67.6673 12.803 67.743 12.2701 67.8813 11.8451L66.9305 11.5355ZM66.6673 13.4545C66.6673 14.1731 66.7508 14.8154 66.9299 15.3719L67.8819 15.0656C67.7428 14.6335 67.6673 14.0997 67.6673 13.4545H66.6673ZM66.9299 15.3719C67.1087 15.9272 67.3796 16.3936 67.7645 16.7349L68.428 15.9867C68.2106 15.7939 68.0213 15.4989 67.8819 15.0656L66.9299 15.3719ZM67.7645 16.7349C68.1615 17.0869 68.6419 17.2614 69.1786 17.2614V16.2614C68.8745 16.2614 68.6333 16.1688 68.428 15.9867L67.7645 16.7349Z" fill="#F27BBD"/>
</g>
<defs>
<filter id="filter0_d_4_4" x="0.0373535" y="0.36377" width="79.8914" height="29.8179" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_4"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_4" result="shape"/>
</filter>
</defs>
</svg>

      <ul className="gap-4 font-semibold  flex">
        {Links.map((link) => {
          return (
            <li key={link.name} className="hidden lg:block">
              <Link href={`#${link.link}`} className="dark:hover:text-gray-400 ">
              {link.name}
              </Link>
            </li>
          );
        })}
        <Separator orientation="vertical" />
        {renderComponentBasedOnCondition(
          theme === 'light',
          <motion.div whileTap={{ scale: 3.5 }}>
            <MoonStar
              className="cursor-pointer w-8 h-8 lg:w-full lg:h-full"
              onClick={() => setTheme('dark')}
            />
          </motion.div>,
          <motion.div whileTap={{ scale: 3.5 }}>
            <Sun
              className="cursor-pointer w-8 h-8  lg:w-full lg:h-full"
              onClick={() => setTheme('light')}
            />
          </motion.div>
        )}
      </ul>
      <ArrowUpCircle
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
        className={cn(
          'fixed top-[47rem] w-8 h-8 hidden stroke-sky-400 z-50 right-6 animate-bounce cursor-pointer',
          scrollY >= 902 ? 'md:block' : 'hidden'
        )}
      />
      <div className="h-16  fixed bottom-0 md:hidden left-0 right-0">
      <div className=" filter blur-sm  bg-white dark:bg-black absolute bottom-0 left-0 top-0 right-0"></div>
        <ul className='flex justify-around relative items-center'>
          {LinksMobile.map((link) => {
            return (
              <li key={link.name} className='w-12 h-12  flex items-center justify-center self-center'>
                <Link href={`#${link.link}`} className="dark:hover:text-gray-400 ">
                {link.icon}
              </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
