

const DownloadApp = () => {
  return (
    <div className="bg-white-off">
      <div className="flex justify-center items-center flex-col gap-5 pt-10 px-4 md:px-10 md:flex-row lg:px-28">
        <div className=" md:w-2/5 ">
          <img src="./app1.png" alt="phoneImage" />
        </div>
        <div className="flex justify-center items-center md:w-3/5 lg:justify-start lg:items-start flex-col">
          <div className="flex gap-4 px-4">
            <img src="Vector.png" alt="vector" className="pt-7" />
            <div className="flex flex-col gap-2">
              <div className="font-semibold	text-5xl pr-10">
                Download the <br />
                <span className="text-sky">Medify</span> App
              </div>
              <div className="text-base	font-bol">
                Get the link to download the app
              </div>
            </div>
          </div>
          <div className="flex gap-5 flex-col justify-center items-center lg:flex-row lg:pl-20">
            <div className="w-80 h-12 flex border border-transparent gap-4 font-bold	text-sm bg-white">
              <span className="flex justify-center items-center pl-4 border-light-grey2">
                +91
              </span>
              <input
                type="tel"
                className="w-80 h-11 placeholder:text-xs	placeholder:font-medium"
                placeholder="Enter phone number"
              />
            </div>
            <button className="text-white bg-sky rounded-lg w-28 h-12 text-base font-medium flex justify-center items-center gap-2">
              Send SMS
            </button>
          </div>
          <div className="flex flex-col pt-5 gap-5 pb-5 lg:flex-row lg:pl-20 lg:pt-16">
            <button>
              <img src="./google_play.png" alt="googlePlay" />
            </button>
            <button>
              <img src="./apple_store.png" alt="appleStore" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
