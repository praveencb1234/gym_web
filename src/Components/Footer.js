import React, { useRef, useState } from 'react'
import "./Footer.css"
import emailjs from "@emailjs/browser"
import { Link } from "react-scroll"
import { NavigateBefore } from '@mui/icons-material'


function Footer() {
  
  const handleClick=()=>{
    if(click.length!==0){

    alert("Check your email buddy")}}

    
  
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hchuelr', 'template_wcx0vxc', form.current, 'EtvoEPKHPoa0FxdIM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  const [click,setClick] = useState("")
   
  return (
    <div className="Footer">
<hr/>




<form ref={form} onSubmit={sendEmail}>
      
      
      
      <input type="email" onChange={(e)=>setClick(e.target.value)} placeholder='enter your email' name="user_email" />
      
      <input type="submit" onClick={handleClick} value="join us" />
    </form>
<div className="icons">
  <a href='https://www.linkedin.com/in/praveencb/'>
    <img src="/linkedin.png" alt="" /></a><a href='https://github.com/praveencb1234'><img src="github-icon.png" alt="" /></a>
    <a href='https://instagram.com/p_r_a_v_e_e_n007'><img src="/insta.png" alt="" /></a>
</div>
    </div>
  )
}

export default Footer