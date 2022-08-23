import React from 'react'
import "./Left.css"
import {Link} from "react-scroll"
function Left() {
  return (
    
<div className="navbar">
<img src="/fit-club.png" alt="" className="logo" />
  <ul className='lists'>
    <li><Link to="ad"
    span={true}
    smooth={true}
    
    >home </Link></li>
    <li><Link to='text'
    span={true}
    smooth={true}
    >why us</Link> </li> 
    <li><Link to='cards'
    smooth={true}
    
    >check out</Link></li>
    <li><Link to="Footer"
    smooth={true}
    
    >join now</Link></li>
  </ul>


</div>

    
  )
}

export default Left