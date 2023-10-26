import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} bg-blue-gradient w-[140px] h-[140] rounded-full p-[2px] cursor-pointe get-hover`}
    >
      <div
        className={`${styles.flexCenter} bg-black w-[140px] h-[140px] rounded-full in-hover`}
      >
        <div className={`${styles.flexCenter} flex-col `}>
          <p className="font-poppins font-medium text-[18px] leading-[23px] flex">
            <span className="text-gradient mr-2"> Get</span>
            <img
              src={arrowUp}
              alt="arrow up"
              className="w-[23px] h-[23px] object-contain"
            />
          </p>
          <div className="font-poppins font-medium text-[18px] leading-[23px] text-gradient">
            Get Started
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
