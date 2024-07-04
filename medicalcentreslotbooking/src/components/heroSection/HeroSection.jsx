

const HeroSection = () => {
  return (
    <div className="flex flex-row gap-1">  
      <div className="heroSection">
        <div className="font-medium	text-3xl black">Skip the travel! Find Online</div>
        <div className="text-6xl font-bold black">Medical <span className="text-6xl	font-bold sky">Centers</span></div>
        <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
        <button>Find Centers</button>
      </div>
      <div>
        <img src="./heroImage.png" alt="HeroImage" />
      </div>
    </div>
  );
};

export default HeroSection;
