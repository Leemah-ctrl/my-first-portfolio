import "./ReachMe.css"

import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

import { BsFillTelephonePlusFill } from "react-icons/bs";

const ReachMe = () => {
  return (
    <div className="ContactMe">
        <div>
            <h1 data-text = "Where to reach me -">Where to reach me -</h1>
        </div>
        <div>
            <div className="socials">
      <div>  <a href="https://github.com/Leemah-ctrl" className="btn"> <FaGithub/> </a></div>
        
         <div> <a href="https://www.linkedin.com/in/halimah-oreoluwa-oloko-42ab1b148" className="btn"> <FaLinkedin/></a></div>
<div> <a href="tel: +2347049387897" className="btn"> <BsFillTelephonePlusFill/></a></div>
<div><a href="https://twitter.com/leemah____/status/1374519367971401730?s=21&t=-sFstE9KtZovU_Xf_Mlvxw" className="btn-light"> <FaTwitter/></a></div>
          </div>
    </div>
    </div>
  )
}

export default ReachMe