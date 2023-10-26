import { stats } from '../Constants'
import styles from '../style'

const Stats = () => (
  <section className={`${styles.flexCenter} sm:mb-20 mb-6 flex-col md:flex-row `}>
    {stats.map(({ title, value }, index) => (
      <div
        key={index}
        className=" flex justify-start items-center mt-4 md:mt-0 w-full"
      >
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {value}
        </h4>
        <p className="font-normal font-poppins xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {title}
        </p>
      </div>
    ))}

  </section>
);

export default Stats
