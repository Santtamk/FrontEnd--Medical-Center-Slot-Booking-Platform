
const BlogCard = () => {
  return (
         <div className="border-2 w-80	h-auto	border-light-grey2 rounded-md">
          <img src="./dtox.png" alt="dtox" />
          <div className="flex flex-col gap-3 p-5">
            <div className="">
                <p className="text-base	font-medium text-light-grey">
                Medical | March 31, 2022
                </p>
            </div>
            <div className="text-wrap text-lg	font-medium text-navy">
                6 Tips To Protect Your Mental Health When You’re Sick
            </div>
            <div className="flex items-center">
                <img src="./author.png" alt="author" />
                <p className="text-base	font-medium text-navy">Rebecca Lee</p>
            </div>
          </div>
        </div>
  )
}

export default BlogCard