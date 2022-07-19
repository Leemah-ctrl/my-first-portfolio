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
    <NavLink
    className="navbar-item"
    activeClassName="is-active"
    to=""https://famous-daifuku-e0e7d1.netlify.app/""
    exact  className = "btn" 
>
	View
</NavLink>
</div>

<div className="card">
<h3>Project 2</h3>
<p className="project-name">Blackjack</p>
<p>HTML</p>
<p>CSS</p>
<p>JavaScript</p>
 

    <NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="https://fluffy-rugelach-d06c90.netlify.app/"
    exact  className = "btn" 
>
	View
</NavLink>
</div>

<div className="card">
<h3>Project 3</h3>
<p className="project-name">Counter</p>
<p>HTML</p>
<p>CSS</p>
<p>JavaScript</p>
    <NavLink
    className="navbar-item"
    activeClassName="is-active"
    to="https://symphonious-bavarois-b5b7a0.netlify.app/"
    exact  className = "btn" 
>
	View
</NavLink>
      <NavLink to ="https://symphonious-bavarois-b5b7a0.netlify.app/ " >VIEW</NavLink>

</div>

</div>
    </div>
  )
}

export default ActualProjects
