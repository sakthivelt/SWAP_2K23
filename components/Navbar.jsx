import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex items-start justify-between gap-8`}>
      <img
        src="./Swap_logo.png"
        alt="swap"
        className="md:w-[60px] md:h-[60px] md:mt-0 mt-3 w-[50px] h-[50px] object-contain"
      />
      <div className="flex items-center">
        <img
          src="./jmc_logo.png"
          alt="swap"
          className="md:w-[90px] md:h-[90px] object-contain w-[60px] h-[60px]"
        />
        <h2 className="font-bold md:text-[20px] text-[12px] leading-[18.24px] md:leading-[19.24px] text-white">
          JAMAL MOHAMED COLLEGE<br />
          <span className="font-thin md:text-[15px] text-[5px]">(AUTONOMOUS)  TIRUCHIRAPPALLI.<br /></span>
          <span className="font-thin md:text-[10px] text-[8px]">Accredited (3rd Cycle) with 'A' Grade by NAAC</span>
          <br />
          <span className="font-bold md:text-[10px] text-[8px]">PG & RESEARCH DEPARTMENT OF COMPUTER SCIENCE</span>
        </h2>
      </div>
      <a href="https://forms.gle/exhRLxcFH1n9RXNF9" target="__blank" className="md:block hidden">
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
          <img
            src="/headset.svg"
            alt="headset"
            className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] object-contain"
          />
          <span className="font-normal text-[12px] md:text-[16px] text-white">
            Register Now
          </span>
        </button>
      </a>
    </div>
  </motion.nav>
);

export default Navbar;
