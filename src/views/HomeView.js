import React from 'react';
import DesktopNav from '../components/DesktopNavBar';
import '../styles/home.css';
import '../styles/about.css';
import '../styles/videos.css';
import dylan from '../dylan.png';
import aboutDylan from '../aboutDylan.jpg';
import YoutubeEmbedVideo from 'youtube-embed-video';

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
                        <div className="aboutPage" id="about">
                            <div className="aboutImgWrapper">
                                    <img src={aboutDylan} alt="aboutDylan" className="aboutDylan"></img>
                                </div>
                                <div className="aboutTextWrapper">
                                    <h2 className="title">Dylan Rieder</h2>
                                    <p className="aboutText">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                        It has roots in a piece of classical Latin literature from 45 BC, 
                                        making it over 2000 years old. Richard McClintock, a Latin professor 
                                        at Hampden-Sydney College in Virginia, looked up one of the more obscure
                                        Latin words, consectetur, from a Lorem Ipsum passage, and going through 
                                        the cites of the word in classical literature, discovered the undoubtable
                                        source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
                                        Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 
                                        45 BC. This book is a treatise on the theory of ethics, very popular during
                                        the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", 
                                        comes from a line in section 1.10.32.

                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for 
                                        those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" 
                                        by Cicero are also reproduced in their exact original form, accompanied by English 
                                        versions from the 1914 translation by H. Rackham.
                                    </p>
                                </div>
                            </div>
                            <div className="videosPage" id="videos">
                                <div className="videosWrapper">
                                    <h2 className="videosTitle">Videos</h2>
                                    <div className="mediumVideos">
                                        <div className="leftHandVideos">
                                            <YoutubeEmbedVideo videoId="dJNgErXfHyg" suggestions={false} size="small" />
                                            <div className="bottomLeftVideo">
                                                <YoutubeEmbedVideo videoId="xtCKZWleUNs" suggestions={false} size="small" />
                                            </div>
                                        </div>
                                        <div className="rightHandVideos">
                                            <YoutubeEmbedVideo videoId="QDAAACqiYr8" suggestions={false} size="small" />
                                            <div className="bottomRightVideo">
                                                <YoutubeEmbedVideo videoId="Sa7TLkNs60g" suggestions={false} size="small" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="smallVideos">
                                        <div className="leftHandVideos">
                                            <YoutubeEmbedVideo videoId="dJNgErXfHyg" suggestions={false} size="small" />
                                            <div className="bottomLeftVideo">
                                                <YoutubeEmbedVideo videoId="xtCKZWleUNs" suggestions={false} size="small" />
                                            </div>
                                        </div>
                                        <div className="rightHandVideos">
                                            <YoutubeEmbedVideo videoId="QDAAACqiYr8" suggestions={false} size="small" />
                                            <div className="bottomRightVideo">
                                                <YoutubeEmbedVideo videoId="Sa7TLkNs60g" suggestions={false} size="small" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                }
            </div>
        )
    }
}

export default HomeView