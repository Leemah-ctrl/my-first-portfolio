import "./Hero.css";
import React from 'react';
import BackgroundImage from "../images/intro-bg1.jpeg"
import {Link} from "react-router-dom"


const hero = () => {
  return (
    <div className="hero">
<div className="bm">
<img className="intro-img" src= {BackgroundImage} alt = "BackgroundImage" />
</div>

<div className="note">
    <h1>Hello! 
        <br/>
        Welcome here.</h1>
    <p>I am Halimah Oreoluwa Oloko
        <br/>
        a Front-end Developer.
    </p>
    <div>
       <Link to= "/Projects" className="btn">Projects</Link>
          <Link to= "/Contact" className="btn-light">Contact</Link>
    </div>
</div>

    </div>
  )
}

export default hero