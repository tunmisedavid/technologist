const RecentCard = ({ info, year, work, head }) => {
  return (
    <div className="font-primary bg-white rounded w-fit md:w-full px-2 lg:px-5 lg:pr-8 py-4 lg:py-6 flex flex-col gap-2 lg:gap-3">
      <p className="text-primaryBrand font-bold text-lg lg:text-2xl w-72 lg:w-[320px]">
        {head}
      </p>
      <p className="text-primaryBrand font-normal text-sm lg:text-lg flex gap-3 items-center">
        <span>{year}</span>
        <hr className="w-4 rotate-90" />
        <span>{work}</span>
      </p>
      <p className="text-primaryBrand font-normal text-xs lg:text-sm xl:text-base w-[235px] md:w-64 lg:w-[300px] xl:w-[380px]">
        {info}
      </p>
    </div>
  );
};

export default RecentCard;
