import React from 'react'
import "./Navbar.css"
function Navbar() {
    return (
        <>
            <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Info</a>
                </li>

            </ul>
        </>
    )
}

export default Navbar
