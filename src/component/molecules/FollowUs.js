// import React from "react";
// import { GlamourellaContext } from "../../utils/context/GlamourellaContext";
// import Icons from "../atoms/Icons";

// const FollowUs = () => {
//   const { socials } = useContext(GlamourellaContext);
//   return (
//     <div className="socials">
//       <h4>Dont Miss a thing! Follow Us!</h4>
//       {socials.map((s) => (
//         <a href={s.link} key={s.uid} className={`social-link ${s.social}`}>
//           <Icons name={s.social} size="2x" />
//         </a>
//       ))}
//     </div>
//   );
// };

// export default FollowUs;
import { useContext } from "react";
import { GlamourellaContext } from "../../utils/context/GlamourellaContext";
import SocialLink from "../atoms/SocialLink";

const FollowUs = () => {
  const { socials } = useContext(GlamourellaContext);
  return (
    <div className="socials">
      <h4 className="title">Dont miss a thing, Follow us on our socials</h4>
      <div className="socials-icons">
        {socials.map((s) => (
          <SocialLink data={s} key={s.uid} />
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
