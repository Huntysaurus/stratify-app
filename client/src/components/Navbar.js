import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ onLogoutClick }) {

    return(
            <div>
                <button onClick={onLogoutClick}>logout</button>
                <NavLink to="/profile">
                    profile
                </NavLink>
            </div>
    )
}

export default Navbar
