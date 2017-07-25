import React from 'react';
import { Link } from 'react-router';
import '../styles/desktopNavBar.css';

const DesktopNavBar = (props) => {
    return (
        <div className="desktopNav">
            <div className="leftSideItems">
                {/*<Link className="headerLink" to='/home'>
                    <span className="companyName">Dylan Rieder</span>
                </Link>*/}
            </div>
            <div className="rightSideItems">
                <Link className="headerLink" to="/">
                    <span className="companyName">Home</span>
                </Link>
                <Link className="headerLink" href='#about'>
                    <span className='shopText'>About</span>
                </Link>
                <Link className="headerLink" href='#videos'>
                    <span className='shopText'>Videos</span>
                </Link> 
                <Link className="headerLink" href='#shop'>
                    <span className='shopText'>Shop</span>
                </Link>  
            </div>
        </div>
    )
}

export default DesktopNavBar