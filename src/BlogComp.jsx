
const BlogComponent = ({ blogHead, blogyr, blogType, blogInfo }) => {
  return (
    <div className="font-primary text-primaryBrand border-b-[1px] border-[#E0E0E0] pb-3 mb-3 ">
      <p className="font-medium mb-2 text-xl sm:text-2xl md:text-3xl ">
        {blogHead}
      </p>
      <p className="font-normal mb-3 md:text-xl flex items-center">
        <span>{blogyr}</span>
        <span className="border-[1px] h-3 ml-2 mr-2"></span>
        <span className="text-[#8695A4] md:text-xl">{blogType}</span>
      </p>
      <p className="font-normal w-72 sm:w-[500px] md:w-[530px] lg:w-[610px]  text-sm lg:text-base">{blogInfo}</p>
    </div>
  );
};

export default BlogComponent;