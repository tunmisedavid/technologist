import BlogComponent from "./BlogComp";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Blog = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={`${
        isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-y-20"
      } transition duration-[1.5s] mt-2  md:mt-20 xl:mt-24  max-w-7xl w-10/12 lg:w-9/12 m-auto font-primary`}
    >
      <p className="font-bold text-primaryBrand mb-4 md:mb-6 text-3xl md:text-4xl">
        Blog
      </p>
      <div>
        <BlogComponent
          blogHead="UI Intractions of the week"
          blogyr="12 Feb 2019"
          blogType="Express, Handlebars"
          blogInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <BlogComponent
          blogHead="UI Intractions of the week"
          blogyr="12 Feb 2019"
          blogType="Express, Handlebars"
          blogInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <BlogComponent
          blogHead="UI Intractions of the week"
          blogyr="12 Feb 2019"
          blogType="Express, Handlebars"
          blogInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
        <BlogComponent
          blogHead="UI Intractions of the week"
          blogyr="12 Feb 2019"
          blogType="Express, Handlebars"
          blogInfo="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
        />
      </div>
    </div>
  );
};

export default Blog;
