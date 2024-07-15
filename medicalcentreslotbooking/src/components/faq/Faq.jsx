
import Questions from "./Questions";

const Faq = () => {

  
  return (
    <div>
      <div>
        <div>
          <div className="text-center text-sky font-semibold	text-base	pb-5">
            Get Your Answer
          </div>
          <div className="text-center text-navy text-5xl	font-semibold">
            Frequently Asked Questions
          </div>
        </div>
        <div>
        </div>
        <div className="flex flex-col justify-center items-center md:justify-start md:items-start md:gap-5 md:flex-row">
            <div className="w-6/12 pt-5">
                <img src="./faq.png" alt="faqImage" className="" />
            </div>
            {/* <div className="relative">
                <img src="./faq.png" alt="faqImage" className="absolute" />
              <div className="right-0">
                <img
                  src="./staticfaq.png"
                  className="absolute top-2 -right-2"
                  alt="staticImage"
                />
              </div>
            </div> */}
            <div className="w-6/12 flex justify-center items-center text-start flex-col gap-12 md:items-start md:pt-14 md:gap-5 md:text-start md:justify-center lg:pt-24 lg:gap-14">
              <Questions question="Why choose our medical for your family?"/>
              <Questions question="Why we are different from others?"/>
              <Questions question="Trusted & experience senior care & love"/>
              <Questions question="How to get appointment for emergency cases?"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
