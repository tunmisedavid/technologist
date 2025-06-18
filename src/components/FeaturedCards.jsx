
const FeaturedCards = ({
  featureImg,
  featureImgAlt,
  featureHead,
  featureYr,
  featureType,
  featureInfo,
}) => {
  return (
    <div className="font-primary flex flex-col md:flex-row gap-4 md:gap-3 lg:gap-6 border-b pb-4 lg:pb-8 border-[#E0E0E0]">
      <div>
        <img
          className="w-[270px] md:h-full"
          src={featureImg}
          alt={featureImgAlt}
        />
      </div>
      <div className="flex flex-col gap-4 md:gap-3 w-full">
        <p className="font-bold text-xl md:text-3xl">{featureHead}</p>
        <div className="flex items-center gap-4 lg:gap-6">
          <p className="bg-[#142850] text-white flex items-center justify-center md:text-lg  font-extrabold w-16 h-6 md:w-20 md:h-7 rounded-xl md:rounded-2xl ">
            {featureYr}
          </p>
          <p className="text-[#8695A4] font-normal text-base md:text-xl ">{featureType}</p>
        </div>
        <p className="font-normal text-xs md:text-sm lg:text-base w-[255px] md:w-[430px] lg:w-[630px] ">
          {featureInfo}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCards;