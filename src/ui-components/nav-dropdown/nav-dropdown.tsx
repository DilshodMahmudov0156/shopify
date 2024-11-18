import React from 'react';
import "./dropdown.css";

function NavDropdown({children}) {
    return (
        <button>
            {children} <i className="bi bi-chevron-down"></i>
        </button>
    );
}

export default NavDropdown;