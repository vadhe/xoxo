import React from 'react';
import { BackgroundBlur } from './BackgroundBlur';
import { Instagram } from 'lucide-react';
export const Footer = () => {
  return (
    <footer className="relative  w-full  flex-col-reverse lg:flex-row  py-32 lg:py-8 mt-12 flex justify-between  items-center lg:px-20">
      <BackgroundBlur />
      <div className="h-full lg:self-start">
        <p>© {new Date().getFullYear()} xoxo community. All right reserved</p>
      </div>
      <div className="flex items-center gap-10 mb-8 z-50">
        <a href="https://t.me/xoxosolana" target="_blank">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
              fill="url(#paint0_linear_6_99)"
            />
            <path
              d="M6.65896 15.8613L17.4335 11.422C18.4971 10.9595 22.1041 9.47976 22.1041 9.47976C22.1041 9.47976 23.7688 8.83236 23.6301 10.4046C23.5838 11.052 23.2139 13.3179 22.8439 15.7688L21.6879 23.0289C21.6879 23.0289 21.5954 24.0925 20.8093 24.2774C20.0231 24.4624 18.7283 23.63 18.4971 23.4451C18.3121 23.3063 15.0289 21.2254 13.8266 20.2081C13.5029 19.9306 13.133 19.3757 13.8728 18.7283C15.5376 17.2023 17.526 15.3063 18.7283 14.104C19.2832 13.5491 19.8382 12.2543 17.526 13.8266L11.0058 18.2196C11.0058 18.2196 10.2659 18.6821 8.87862 18.2659C7.49133 17.8497 5.87284 17.2948 5.87284 17.2948C5.87284 17.2948 4.76301 16.6011 6.65896 15.8613Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_6_99"
                x1="21.3346"
                y1="5.33457"
                x2="13.3346"
                y2="24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#37AEE2" />
                <stop offset="1" stop-color="#1E96C8" />
              </linearGradient>
            </defs>
          </svg>
        </a>
        <a href=" https://twitter.com/xoxo_on_sol" target="_blank">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.2019 1.33398H30.1087L19.3887 13.5863L32 30.259H22.1254L14.3913 20.1471L5.54174 30.259H0.631901L12.0981 17.1538L0 1.33398H10.1252L17.1162 10.5766L25.2019 1.33398ZM23.4797 27.322H26.1987L8.64785 4.11672H5.73013L23.4797 27.322Z"
              fill="black"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
