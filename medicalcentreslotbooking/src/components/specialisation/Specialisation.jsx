
import UtilityCard from '../utilities/UtilityCard'
import { PiHospitalLight } from "react-icons/pi";
import { CiStethoscope } from "react-icons/ci";
import { TbHeartRateMonitor } from "react-icons/tb";
import { FaFileMedicalAlt } from "react-icons/fa";
import { MdBloodtype } from "react-icons/md";
import { LiaXRaySolid } from "react-icons/lia";
import { RiShieldCrossLine } from "react-icons/ri";
import './Specialisation.css';

const Specialisation = () => {
  return (
    <div className='py-10 backround '>
        <div>
            <h1 className='text-center text-navy font-semibold text-5xl py-10'>Find by specialisation</h1>
        </div>
        <div className='flex flex-col justify-center items-center gap-5 md:grid md:grid-cols-2 md:justify-items-center lg:grid lg:grid-cols-4 lg:px-8'>
            <UtilityCard text="Dentistry" icon={PiHospitalLight}/>
            <UtilityCard text="Primary Care" icon={CiStethoscope}/>
            <UtilityCard text="Cardiology" icon={TbHeartRateMonitor}/>
            <UtilityCard text="MRI Resonance" icon={FaFileMedicalAlt}/>
            <UtilityCard text="Blood Test" icon={MdBloodtype}/>
            <UtilityCard text="Piscologist" icon={RiShieldCrossLine }/>
            <UtilityCard text="Laboratory" icon={PiHospitalLight}/>
            <UtilityCard text="X-Ray" icon={LiaXRaySolid}/>
        </div>
        <div className='flex items-center justify-center py-10'>
            <button className="text-white bg-sky rounded-lg w-36 h-12 text-base font-medium">View All</button>

        </div>
    </div>
  )
}

export default Specialisation