import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-4">
        <div className="font-semibold text-sky text-base text-center">
          Blog & News
        </div>
        <div className="text-5xl font-semibold text-navy text-center pb-5">
          Read Our Latest News
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 md:flex-wrap md:flex-row lg:flex-wrap lg:flex-row">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
