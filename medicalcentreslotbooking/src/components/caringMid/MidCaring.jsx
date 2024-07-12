import { VscVerifiedFilled } from "react-icons/vsc";

const MidCaring = () => {
  return (
    <div className="bg-white-off ">
      <div className="flex flex-col justify-center items-center p-10 gap-10 lg:flex-row lg:items-center lg:justify-center lg:mx-28">
        <div className="flex justify-center items-center lg:w-6/12">
          <img src="./Group.png" alt="groupImage" />
        </div>
        <div className="flex flex-col gap-5 lg:w-6/12">
          <div className="text-base font-semibold	text-sky">
            HELPING PATIENTS FROM AROUND THE GLOBE!!
          </div>
          <h4 className="text-5xl	font-semibold">
            <span className="text-navy">Patient</span>{" "}
            <span className="text-sky">Caring</span>
          </h4>
          <p className="font-medium text-base text-light-grey">
            Our goal is to deliver quality of care in a courteous, respectful,
            and compassionate manner. We hope you will allow us to care for you
            and strive to be the first and best choice for healthcare.
          </p>
          <p className="flex items-center gap-2">
            <VscVerifiedFilled className="text-sky" />
            <span className="font-medium text-lg text-navy">
              Stay Updated About Your Health
            </span>
          </p>

          <p className="flex items-center gap-2">
            <VscVerifiedFilled className="text-sky" />
            <span className="font-medium text-lg text-navy">
              Check Your Results Online
            </span>
          </p>
          <p className="flex items-center gap-2">
            <VscVerifiedFilled className="text-sky" />
            <span className="font-medium text-lg text-navy">
              Manage Your Appointments
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MidCaring;
