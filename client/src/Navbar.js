import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar({ onLogoutClick }) {
    const navigate = useNavigate()

    return(
        <div>
            <h3>navbar</h3>
            <div>
                <button onClick={onLogoutClick}>logout</button>
                <NavLink to="/profile">
                    profile
                </NavLink>
                {/* <NavLink to="/cart">
                    cart
                </NavLink> */}
            </div>
        </div>
    )
}

export default Navbar
