

const UtilityCard = ({ icon: Icon, text}) => {
  return (
    <div>
        <div className="flex flex-col  w-52 *:justify-center items-center bg-white-off border-2 border-transparent rounded-md py-4 hover:border-2 hover:border-sky hover:bg-sky-400 text-light-grey2 hover:text-sky 	">
              <Icon className=" h-12	w-11 text-sky" />
              <p className="text-lg font-normal">{text}</p>
            </div>
    </div>
  )
}

export default UtilityCard