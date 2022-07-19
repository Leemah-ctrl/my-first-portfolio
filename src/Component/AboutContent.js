import "./AboutContent.css";

import React from 'react'
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="About">
        <div  className="left">
            <h1 data-text= "Hello,">Hello, </h1>
            <p >
My name is Halimah Oreoluwa Oloko, a Frontend Developer from Lagos, Nigeria. I recently graduated from the Black Girls In Tech Bootcamp and my strengths are in Html, CSS, Bootstrap, JavaScript & React.
<br/>
When I am not coding, I am distributing the next hit  song or trying to discover the next Tems. Through these, I have mastered project management and other transferable skills I believe would help me scale through in tech.
Open to connect, collaborate and learn.
            </p>
            <Link to="/Contact"> 
            <button data-text = "Let's Connect!" className="btn">Let's connect!</button>
            </Link>

        </div>
    </div>
  )
}

export default AboutContent