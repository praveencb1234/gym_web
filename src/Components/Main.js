import React from 'react'
import Left from './Left'
import "./Main.css"
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/Fade';
import {motion}from "framer-motion"
import CountUp from 'react-countup';
import Flip from 'react-reveal/Flip';
import {Link} from "react-scroll"
function Main() {

  return (
    <div className='head'>
<div className="left-side">
<Left/>

<div className="ad">
<Fade right> <div></div></Fade>
<span>the best gym in the town</span>

</div>
<div className="body">
  <span className='style-text'>shape</span> <span>your</span><span>ideal body</span>
</div>
<div className="qt">
<Flip left> <h3>“You don’t have to be extreme, just consistent.”
</h3></Flip>
</div>
<div className="figures">

<div><span><CountUp end={140}></CountUp></span> <span>coaches</span></div>
<div><span><CountUp end={+160}></CountUp></span><span>machines</span></div>
<div><span><CountUp end={+180}></CountUp></span><span>joined</span></div>
</div>
<div className="buttons"><button className='first-b'>Get Start
  </button><button className='second-b'>Learn More</button></div>
</div>
<div className="right-side">
<div className="btn-hrt"><button className="btn"><Link to='Footer'

smooth={true}
span={true}>join now</Link></button></div>
<LightSpeed Left><div className= "hrt-shape">

  <img src="/hrt.png" alt="" className="hrt" />
  <span>BPM 112</span>
  
</div></LightSpeed>

<div  className="img">
<LightSpeed Left><img src="/image-back.png" alt="" className='show' /></LightSpeed>
  <img  className="sports-img"src="/excer.png" alt="" />
</div>
<LightSpeed right><div className="calorie-card">
  <img src="/calorie.png" alt="" className="calorie" />
  <span>burned</span><span>+220kcal</span>
</div></LightSpeed>

</div>


    </div>
  )
}

export default Main