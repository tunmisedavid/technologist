import SocialIcons from "./SocialIcons";

const Socials = ( ) => {
  return (
    <div className="mt-24 ">
      <div className="flex justify-center items-center gap-6">
        <SocialIcons
          socialLink="#"
          socialSrc="src/assets/fb.png"
          socialApp="facebook"
        />
        <SocialIcons
          socialLink="#"
          socialSrc="src/assets/insta.png"
          socialApp="Instagram"
        />
        <SocialIcons
          socialLink="#"
          socialSrc="src/assets/twitter.png"
          socialApp="Twitter"
        />
        <SocialIcons
          socialLink="#"
          socialSrc="src/assets/Linkedin.png"
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
}

export default Socials;