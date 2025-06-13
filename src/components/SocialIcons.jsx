
const SocialIcons = ({ socialLink, socialSrc, socialApp }) => {
  return (
    <div>
      <a href={socialLink} target="_blank" rel="noreferrer">
        <img className="w-5 md:w-7" src={socialSrc} alt={socialApp} />
      </a>
    </div>
  );
};

export default SocialIcons;