import SocialIcons from "./SocialIcons";

import facebookIcon from "../assets/fb.png";
import instagramIcon from "../assets/insta.png";
import twitterIcon from "../assets/twitter.png";
import linkedInIcon from "../assets/Linkedin.png";

const Socials = () => {
  return (
    <div className="mt-24 ">
      <div className="flex justify-center items-center gap-6">
        <SocialIcons
          socialLink="#"
          socialSrc={facebookIcon}
          socialApp="facebook"
        />
        <SocialIcons
          socialLink="#"
          socialSrc={instagramIcon}
          socialApp="Instagram"
        />
        <SocialIcons
          socialLink="#"
          socialSrc={twitterIcon}
          socialApp="Twitter"
        />
        <SocialIcons
          socialLink="#"
          socialSrc={linkedInIcon}
          socialApp="Linkedin"
        />
      </div>
      <div className="mt-4 md:mt-6 mb-6 md:mb-8">
        <p className="font-primary font-normal text-xs text-primaryBrand text-center">
          Copyright ©2020 All rights reserved{" "}
        </p>
      </div>
    </div>
  );
};

export default Socials;
