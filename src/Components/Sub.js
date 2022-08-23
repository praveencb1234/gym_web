import React from 'react'
import "./Sub.css"
import Cards from "./../Components/Cards"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SvgLines from 'react-mt-svg-lines';
function Sub() {
  return (
    <div className="head">
<div className="heads">
<span className='style-text'>explore our</span>
<span> programs to</span>
<span> shape you</span>
</div>
<div className="cards">
    <div className="card">
<Cards text={"In this program, you are trained to improve your strength through many exercises."} icon={<FitnessCenterIcon/>}  head={"strength"}className="cd"/>
<Cards text={"In this program, you are trained to do sequential moves in range of 20 until 30 minutes."} icon={<DirectionsRunIcon/>}head={<div><span>Cardio</span> <span>Training</span></div>}className="cd"/>
<Cards text={"This program is suitable for you who wants to get rid of your fat and lose their weight."} icon={<LocalFireDepartmentIcon/>}head={"Fat Burning"} className="cd"/>
<Cards text={"This programs is designed for those who exercises only for their body fitness not body building."} icon={<VolunteerActivismIcon/>} head={"Health Fitness"}className="cd"/>
</div>

</div>

    </div>
  )
}

export default Sub