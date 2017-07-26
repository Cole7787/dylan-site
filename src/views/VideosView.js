import React from 'react';
import '../styles/videos.css';
import YoutubeEmbedVideo from 'youtube-embed-video';

class VideosView extends React.Component {
    render() {
        return (
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
        )
    }
}

export default VideosView