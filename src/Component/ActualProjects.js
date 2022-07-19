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
<NavLink to = "https://app.netlify.com/sites/famous-daifuku-e0e7d1" className = "btn">VIEW</NavLink>
</div>

<div className="card">
<h3>Project 2</h3>

<p className="project-name">Blackjack</p>
<p>HTML</p>
<p>CSS</p>
<p>JavaScript</p>
<NavLink to = "https://app.netlify.com/sites/fluffy-rugelach-d06c90" className = "btn">VIEW</NavLink>
</div>

<div className="card">
<h3>Project 3</h3>

<p className="project-name">Counter</p>
<p>HTML</p>
<p>CSS</p>
<p>JavaScript</p>
<NavLink to = " https://app.netlify.com/sites/symphonious-bavarois-b5b7a0 " className = "btn">VIEW</NavLink>
</div>

</div>
    </div>
  )
}

export default ActualProjects