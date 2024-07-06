const HeroSection = () => {
  return ( 
    <div className="flex justify-between p-4 gap-4 flex-col lg:flex-row md:py-4 md:px-7 lg:px-28 lg:py-28">
      <div className="heroSection flex flex-col gap-4">
        <div className="font-medium	text-l black lg:font-medium lg:text-3xl	">
          Skip the travel! Find Online
        </div>
        <div className="text-3xl font-bold lg:text-6xl lg:font-bold">
          <span className="text-black pr-4">Medical</span>
          <span className="text-sky">Centers</span>
        </div>
        <p className="text-light-grey font-normal	text-l lg:text-xl	">
          Connect instantly with a 24x7 specialist or choose to video visit a
          particular doctor.
        </p>
        <button className="text-white bg-sky rounded-lg w-44 h-12 text-base font-medium">Find Centers</button>
      </div>
      <div className="flex justify-center items-center md:justify-items-center	md:items-center">
        <img src="./heroImage.png" alt="HeroImage" className="object-contain "/>
      </div>
    </div>
  );
};

export default HeroSection;
