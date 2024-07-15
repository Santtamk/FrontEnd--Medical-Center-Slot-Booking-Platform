import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import Prototypes from 'prop-types';


const Questions = ({ question }) => {

    const [hidden, setHidden] = useState(true);

  const toggle = () => {
    setHidden(!hidden);
  };

  return (
    <div>
      <div>
        <div className=" text-navy text-lg font-semibold	flex cursor-pointer" onClick={toggle}>
          <div>{question}</div>
          <div className="flex justify-center items-center text-sky pl-4">
            <FaPlus />
          </div>
        </div>
        {!hidden &&
        <p className=" text-light-grey font-medium	text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam ad
          error, nulla optio at quis alias dignissimos expedita quasi quod
          inventore, accusamus facere! Error illo animi eum, quia saepe unde!
        </p>}
      </div>
    </div>
  );
};

Questions.Prototypes={
    question: Prototypes.string,
 };

export default Questions;

