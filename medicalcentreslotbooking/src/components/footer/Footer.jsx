import { IoShieldCheckmark } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-navy">
      <div className="flex justify-center flex-col items-center gap-5 py-5 px-4 md:px-10 md:justify-between md:items-stretch lg:flex-row lg:px-36 lg:pt-10 lg:justify-start lg:items-center lg:gap-10">
        <div className="flex flex-col lg:gap-16">
          <div className=" flex gap-1 justify-center items-center md:justify-start">
            <p className="flex justify-center items-center bg-sky border border-transparent p-2 rounded-lg">
              <IoShieldCheckmark className="text-white" />
            </p>
            <p className="text-2xl font-bold text-sky">Medify</p>
          </div>

          <div className="flex gap-5 pt-5">
            <p className="flex justify-center items-center bg-white-off border p-2 rounded-full border-transparent">
              <FaFacebookF className="text-sky" />
            </p>
            <p className="flex justify-center items-center bg-white-off border p-2 rounded-full border-transparent">
              <FaTwitter className=" text-sky" />
            </p>
            <p className="flex justify-center items-center bg-white-off border p-2 rounded-full border-transparent">
              <FaYoutube className=" text-sky" />
            </p>
            <p className="flex justify-center items-center bg-white-off border p-2 rounded-full border-transparent">
              <FaPinterest className=" text-sky" />
            </p>
          </div>
        </div>
        <div className="flex gap-5 flex-wrap justify-center items-center md:justify-between md:items-start lg:justify-between lg:items-stretch lg:gap-44">
          <div className="text-white-off font-normal text-base flex flex-col gap-3">
            <div>&gt; About Us</div>
            <div>&gt; Our Pricing</div>
            <div>&gt; Our Gallery</div>
            <div>&gt; Appointment</div>
            <div>&gt; Privacy Policy</div>
          </div>
          <div className="text-white-off font-normal text-base flex flex-col gap-3">
            <div>&gt; Orthology</div>
            <div>&gt; Neurology</div>
            <div>&gt; Dental Care</div>
            <div>&gt; Opthalmology</div>
            <div>&gt; Cardiology</div>
          </div>
          <div className="text-white-off font-normal text-base flex flex-col gap-3">
            <div>&gt; About Us</div>
            <div>&gt; Our Pricing</div>
            <div>&gt; Our Gallery</div>
            <div>&gt; Appointment</div>
            <div>&gt; Privacy Policy</div>
          </div>
        </div>
      </div>
      <div className="py-5 px-4 md:px-10 lg:px-36 ">
        <div className="text-light-grey">
            <hr />
        </div>
        <div className="pt-4 text-white-off font-normal	text-base text-center lg:text-start">
            <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
