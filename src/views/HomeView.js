import React from 'react';
import DesktopNav from '../components/DesktopNavBar';
import AboutView from './AboutView';
import VideosView from './VideosView';
import '../styles/home.css';
import aboutDylan from '../aboutDylan.jpg';


class HomeView extends React.Component {
    render() {
        return (
            <div>
                <DesktopNav />
                {
                    <div>
                        <div className="homePage">
                            <img src={dylan} alt="dylan" className="dylan"></img>
                        </div>
                        <AboutView />
                        <VideosView />
                    </div>
                }
            </div>
        )
    }
}

export default HomeView