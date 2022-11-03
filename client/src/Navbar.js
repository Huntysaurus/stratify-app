import React from "react";

function Navbar({ onLogoutClick }) {
    return(
        <div>
            <h3>navbar</h3>
            <div>
                <button onClick={onLogoutClick}>logout</button>
            </div>
        </div>
    )
}

export default Navbar
