import React from 'react'
import './navbar.scss'
import { Link, Outlet } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HomeIcon from '@mui/icons-material/Home';
const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <Link to='/'>
                    <HomeIcon className='home-icon' />
                </Link>
                <div className="left">
                    <Link to='newstudent'>
                        <span className="title">Student</span>
                        <PersonIcon />
                    </Link>
                </div>
                <div className="right">
                    <Link to='newUniversity'>
                        <span className="title">University</span>
                        <AccountBalanceIcon />
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar
