
import HospitalView from '../findDoctors/HospitalView'

const MyBooking = () => {

  return (
    <div>
        <div>
            <div>

            MY Booking
            </div>
            <div>
                <div>
                    <input type="text" placeholder='Search By Hospital' />
                    <button>Search</button>
                </div>
            </div>
            
        </div>
        
        <HospitalView />

    </div>
  )
}

export default MyBooking