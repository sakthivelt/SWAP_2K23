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
        className="w-[35px] h-[35px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        SWAP 2K23
      </h2>
      <a href="https://forms.gle/exhRLxcFH1n9RXNF9" target="__blank">
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]">
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
  </motion.nav>
);

export default Navbar;
