import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink exact to="/education">Education</NavLink>
            <NavLink exact to="/skills">Skills</NavLink>
        </div>
    );
}

export default NavBar;