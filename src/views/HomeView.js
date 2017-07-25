import React from 'react';
import DesktopNav from '../components/DesktopNavBar';
import '../styles/home.css';
import dylan from '../dylan.png';

class HomeView extends React.Component {
    render() {
        return (
            <div>
                <DesktopNav />
                {
                    <div className="homePage">
                        <img src={dylan} alt="dylan" className="dylan"></img>
                    </div>
                }
            </div>
        )
    }
}

export default HomeView