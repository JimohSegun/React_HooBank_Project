import { feedback } from '../Constants'
import styles from '../style'
import FeedbackCard from "./FeedbackCard"

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexStart} flex-col relative`}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2} `}>
          What people are <br className="hidden sm:block " /> saying about us
        </h2>
        <div className="w-full md:mt-0 mt-6 ">
          <p className={`${styles.paragraph}`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {" "}
        {feedback.map((card, index) => {
          return <FeedbackCard key={index} {...card} />;
        })}
      </div>
      <div className="absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full blue__gradient" />
    </section>
  );
}

export default Testimonials
