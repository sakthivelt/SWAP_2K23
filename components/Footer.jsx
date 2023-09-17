'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import styles from '../styles';

import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[64px] text-[44px] text-white">
          Hurry up! Book Your Slots
        </h4>
        <a href="https://forms.gle/exhRLxcFH1n9RXNF9" target="__blank">
          <button
            type="button"
            className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
          >
            <img
              src="/headset.svg"
              alt="headset"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-white">
              Register Now
            </span>
          </button>
        </a>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <a href="https://www.linkedin.com/in/sakthivel-thangaraj-1b8a821b0/" target="__blank">
            <div className="flex justify-center items-center">
              <img
                src="/sakthi.jpg"
                alt="sakthivel"
                className="w-[75px] h-[75px] rounded-full transition-transform transform hover:scale-110 hover:shadow-lg m-5"
              />
              <h4 className="font-extrabold text-[24px] text-white">
                <span className="text-[15px] font-thin">developer</span>
                <br />
                SAKTHIVEL
              </h4>
            </div>
          </a>
          <p className="font-normal text-[14px] text-white opacity-50">
            Copyright © 2021 - 2022 Sakthiveltofficial@gmail.com
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <a href={social.webUrl} target="__blank" key={social.name}>
                <img
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
