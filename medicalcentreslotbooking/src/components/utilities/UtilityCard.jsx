import PropTypes from 'prop-types';


const UtilityCard = ({ icon: Icon, text}) => {
  return (
    <div>
        <div className="flex flex-col justify-center items-center h-44	 w-72 *:justify-center items-center bg-white-off border-2 border-transparent rounded-md py-4 hover:border-2 hover:border-sky hover:bg-sky-400 text-light-grey2 hover:text-sky 	">
              <Icon className=" h-16	w-16 text-sky" />
              <p className="text-lg font-medium	">{text}</p>
            </div>
    </div>
  )
}

export default UtilityCard

UtilityCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    text:PropTypes.string.isRequired,
  };