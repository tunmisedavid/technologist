
const RecentCard = ({info, year, work, head}) => {
  return (
    <div className="font-primary bg-white rounded px-2 lg:px-5 lg:pr-10 py-4 lg:py-8 flex flex-col gap-4 lg:gap-6">
      <p className="text-primaryBrand font-bold text-lg lg:text-2xl w-72 lg:w-[320px]">
        {head}
      </p>
      <p className="text-primaryBrand font-normal lg:text-lg ">
        {year} <span className="border ml-4 mr-4"></span> {work}
      </p>
      <p className="text-primaryBrand font-normal text-xs lg:text-base w-64 lg:w-80 ">
        {info}
      </p>
    </div>
  );
}

export default RecentCard;