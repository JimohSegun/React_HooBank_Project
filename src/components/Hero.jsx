import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`${styles.paddingY} flex flex-col md:flex-row`}
    >
      <div
        className={`${styles.flexStart} flex-1 px-6 flex-col xl:px-0 sm:px-16 `}
      >
        <div className="flex flex-row items-center py-[16px] px-4 bg-discount-gradient rounded-[10px] mb-2 ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 mt-0 mb- p-3 pl- `}>
            <span className="text-white ">20% </span>
            DISCOUNT FOR <span className="text-white"> 1 MONTH </span> ACCOUNT
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full ">
          <h1 className="text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            The Next <br className=" hidden sm:block" />{" "}
            <span className="text-gradient">Generation </span>
          </h1>
          <div className="hidden ss:flex md:mr-4 mr-0 hero-hover">
            <GetStarted />
          </div>
        </div>

        <div>
          <h1
            className="text-white font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] 
          w-full"
          >
            Payment Method.
          </h1>
          <p className={`${styles.paragraph} text-white max-w-[470px] mt-5`}>
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>
      </div>

      <div className={`${styles.flexCenter} relative md:my-0 flex-1 my-10 `}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] z-[5] " />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 white__gradient rounded-full" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`${styles.flexCenter} ss:hidden`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
