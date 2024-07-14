
import Questions from "./Questions";

const Faq = () => {

  
  return (
    <div className="flex">
      <div className="w-6/12">
        <div>
          <div className="text-center text-sky font-semibold	text-base	">
            Get Your Answer
          </div>
          <div className="text-center text-navy text-5xl	font-semibold">
            Frequently Asked Questions
          </div>
        </div>
        <div>
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
      </div>
      <div className="w-6/12 flex justify-center items-start flex-col gap-12">
        <Questions question="Why choose our medical for your family?"/>
        <Questions question="Why choose our medical for your family?"/>
        <Questions question="Why choose our medical for your family?"/>
        <Questions question="Why choose our medical for your family?"/>
      </div>
    </div>
  );
};

export default Faq;
