import React from "react";
import { NavLink } from "react-router-dom";

function Navbar({ onLogoutClick }) {

    return(
        <div>
            <h3>navbar</h3>
            <div>
                <button onClick={onLogoutClick}>logout</button>
                <NavLink to="/profile">
                    profile
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
