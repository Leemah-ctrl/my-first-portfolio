
import {Link} from "react-router-dom"
import "./Navbar.css";
import { FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react';



function BasicExample() {
const [click,setClick] = useState(false);
const handleClick = () => setClick(!click);
const [color,setColor] = useState(false)
const changeColor = () =>{
  if(window.scrollY >=100){
    setColor(true);
  }else{
    setColor(false);
  }
};

window.addEventListener("scroll",changeColor);




  return (
    <div className={color? "header hearder-bg" : "header"}>
            <Link to ="#"> <h1>My Portfolio</h1></Link>
          <ul className= {click? "me-auto active" : "me-auto" }>
            <li>
              <Link>HOME</Link>
            </li>

            <li>
              <Link to="/About" >ABOUT</Link>
            </li>

            <li>
              <Link to="/Projects" >PROJECTS</Link>
            </li>

            <li>
              <Link to="/Contact" >CONTACT</Link>
            </li>
          </ul>
    <div className='hamburger' onClick={handleClick}>
         {click? (<FaTimes size={25} style={{color: "#fff"}}/>) : (
            <FaBars size={25} style={{color: "#fff"}}/>     
        )}
          </div> 
    </div>

    
  );

  
}

export default BasicExample;
