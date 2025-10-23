import React from 'react'

const Navbar = () => {
    return (
        <header className="header">
            <a href="#" className='logo'>Logo</a>

            <input type="checkbox" id="check" />
            <label htmlFor="check" className='icons'>
                <i class='bx bx-menu' id='menu-icon'></i>
                <i class='bx bx-x'id='close-icon'></i>
            </label>

            <nav className="navbar">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#project">Project</a>
                <a href="#contect">Contect</a>
            </nav>
        </header>
    )
}

export default Navbar
