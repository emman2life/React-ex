import React from 'react';
import Search from './Search';
import './style/VideoPage.css';
function VideoPage({match}){
    const information = require('./information.json');
    const clip = information.find(item=>item.id==match.params.id);
    const media = require('./videos/'+clip.media+'.mp4');
    console.log(clip);
        return(
           
            <div className="VideoPage">
                 <Search
            logo = {require('./images/logo/logo-dark.svg')}
            light = {'header dark'}
            />
                <div className="video-container">
                    <video controls=""><source src={media} type="video/mp4"/></video>
                    </div>
                    <div className="body-container">
                        <h1 className="title">
                            {clip.title}
                            </h1>
                            <p className="description">{clip.view}</p>
                            <hr/>
                            <div className="meta-data">
                                <div className="left">
                                    <img className="channel-thumb" src={`./images/channels/${clip.channelThumb}.jpg`} alt={clip.channelName}/>
                                 </div>
                                        <div className="right"><h1 className="title">{clip.channelName}</h1><p className="description">{clip.suscribers}</p><p className="description">{clip.description}</p> 
                                        </div>
            </div>
            <hr/>
            <a className="button" href="/">Back to home</a>
            </div>
           
            </div>
        );
}
export default VideoPage