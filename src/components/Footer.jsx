import { logo } from "../assets";
import { footerLinks, socialMedia } from "../Constants";
import styles from "../style";

const Footer = () => {
  return (
    <footer className="flex flex-col md:py-6 py-4">
      <div className="flex w-full mb-3 sm:mb-8 flex-col items-start md:flex-row md:mt-6 mt-4">
        <div className="flex flex-col items-start justify-center flex-1 ">
          <img src={logo} alt="hookbank logo" className="w-[184px] h-[72px]" />
          <p className="md:text-[18px] text-[16px] font-poppins md:leading-[32px] leading-[16px] text-white mt-4 max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] flex justify-between items-start w-full mt-8 md:mt-0 flex-wrap">
          {footerLinks.map((footerlink, index) => (
            <div key={index} className="min-w-[150px] mb-7 md:mb-0">
              {" "}
              <h4 className="text-white mb-3 text-[18px] font-poppins font-semibold">
                {" "}
                {footerlink.title}
              </h4>
              <ul className="flex flex-col text-[16px] text-dimWhite">
                {footerlink.links.map(({ name, link }, index) => (
                  <li key={index}>
                    {" "}
                    <a href={link}>{name}</a>{" "}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row border-t-[1px] border-t-[#3F3E45] md:py-10 py-6">
        <p className="text-dimWhite flex-1 flex-wrap">
          Copyright @ 2023 HooBank. All Rights Reserved.
        </p>
        <div className="flex mt-6 sm:mt-0">
          {socialMedia.map(({ icon, link }, index) => (
            <a
              href={link}
              key={index}
              className={`${index === socialMedia - 1 ? "mr-0" : "mr-7"} `}
            >
              <img src={icon} alt="icon logo" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;







// const Footer = () => {
//   return (
//     <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
//       <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
//         <div className="flex-1 flex flex-col justify-start mr-10">
//           <img
//             src={logo}
//             alt="hoobank"
//             className="w-[184px] h-[72px] object-contain"
//           />
//           <p className={`${styles.paragraph} mt-4 max-w-[312px] `}>
//             A new way to make the payments easy, reliable and secure.
//           </p>
//         </div>

//         <div className="flex-[1.5] w-full flex flex-row flex-wrap md:mt-0 mt-10 justify-between">
//           {footerLinks.map((footerlink) => (
//             <div
//               key={footerlink.id}
//               className="flex flex-col ss:my-0 my-4 min-w-[150px]  "
//             >
//               <h4 className="text-white font-poppins font-medium text-[18px] leading-[27px] md:mb-5 mb-3 ">
//                 {footerlink.title}
//               </h4>
//               <ul>
//                 {footerlink.links.map(({name}, index) => (
//                   <li
//                     key={index}
//                     className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite
//                    hover:text-secondary cursor-pointer ${
//                      index === footerlink.links.length - 1
//                        ? "md:mb-0"
//                        : "md:mb-3"
//                    }`}
//                   >
//                     {name}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-between w-full items-center flex-col md:flex-row pt-6 border-t-[1px] border-t-[#3f3r45]">
//         <p className=" text-dimWhite font-poppins font-medium text-[18px] leading-[27px]  ">
//           Copyright @ 2023 HooBank. All Rights Reserved.
//         </p>

//         <div className="flex flex-row md:mt-0 mt-6 items-center">
//           {socialMedia.map((social, index) => (
//               <img src={social.icon} alt={social.id} key={index}
//                className={`${index === socialMedia -1 ? "mr-0" : "mr-6"}  mr-6 w-[21px] h-[21px]` } />
//           ))}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
