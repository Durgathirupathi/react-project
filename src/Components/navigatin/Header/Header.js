import React from 'react'
import logo from "../../../assets/IDFC-First-Bank-Logo-Vector-1723618448983.jpg";
import "./header.less"
import { IoChevronDownCircleOutline } from 'react-icons/io5';

// import 'ionicons/dist/css/ionicons.min.css';

function Header() {
    return (
        <div>
            <nav className='header'>
                <div className='header-wrapper'>
                    <div className='header-container'>
                        <figure>
                            <img src={logo} alt="idfc logo" className='logo' />
                        </figure>
                        <div className='nav-bar'>
                            <ul className='nav-list'>
                                <li className='nav-item'>
                                    Apply <IoChevronDownCircleOutline style={{ color: "#ffffff"}} />
                                </li>

                                <li className='nav-item'>About the Bank</li>
                                <li className='nav-item'><a href="/">#TechNEXT</a></li>
                                <li className='nav-item'><a href="/">Campus</a></li>
                                <li className='nav-item'>Help</li>
                            </ul>
                        </div>
                        <div className='nav-btn'>
                            <button className='login-btn'>Login</button>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Header
