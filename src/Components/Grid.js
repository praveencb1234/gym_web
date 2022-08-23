import React from 'react'
import "./Grid.css"
import SvgLines from 'react-mt-svg-lines';
function Grid() {
  return (
    <div className="grid">
<div className="left-grid">
<img src="/image-1.png" alt="" className="grid-image" /><img src="/image-2.png" alt="" className="grid-image" /><img src="/image-3.png" alt="" className="grid-image" /><img src="/image-4.png" alt="" className="grid-image" />



</div>

<div className="right-grid"></div>
<div className="text">

  <span className='style-text'>why </span><span>choose us ?</span>
</div>
<div className="reasons">
 <div><img src="/tick.png" alt=""></img>
 <span>over 140+ courses</span>
 </div>
 <div><img src="tick.png" alt=""></img>
 <span>train smarter and faster</span>
 </div>
 <div><img src="tick.png" alt=""></img>
 <span>free programs</span>
 </div>
 <div><img src="tick.png" alt=""></img>
 <span>reliable partners</span>
 </div>
 <div className="partner">
  <span>our partners </span>
  <div>
  
  <img src="nike-logo.png" alt="" className="partner" />
  
  
  

  <img src="adidas-logo.png" alt="" className="partner" />
  <img src="nike-o.png" alt="" className="partner" />
  </div>
 </div>
</div>
    </div>
  )
}

export default Grid