import "./ActualProject.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const ActualProjects = () => {
  return (
    <div className="card-main">
<div className="card-container">
<div className="card">
<h3>Project 1</h3>

<p className="project-name">Website</p>
<p>HTML</p>
<p>CSS</p>
<p>Bootstrap</p>
     <NavLink to ="https://famous-daifuku-e0e7d1.netlify.app/" className = "btn" >VIEW</NavLink>
</div>

<div className="card">
<h3>Project 2</h3>
<NavLink to ="https://fluffy-rugelach-d06c90.netlify.app/" className = "btn" >VIEW</NavLink>
<p className="project-name">Blackjack</p>
<p>HTML</p>
<p>CSS</p>
<p>JavaScript</p>
   
</div>

<div className="card">
<h3>Project 3</h3>
<p className="project-name">Counter</p>
<p>HTML</p>
<p>CSS</p>
<p>JavaScript</p>
      <NavLink to ="https://symphonious-bavarois-b5b7a0.netlify.app/ "  className = "btn" >VIEW</NavLink>

</div>

</div>
    </div>
  )
}

export default ActualProjects
