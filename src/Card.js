import React from 'react';
import './style/Cards.css';
import {Link} from "react-router-dom";
function Card(props){

    return (
        <article className="card">
            <Link to={`./VideoPage/${props.id}`}>
       <img className="preview" src={props.media} alt={props.channelThumb}></img>
            <div className="meta-data">
                <div className="left">
                    <img className="channel-thumb" src={props.channelThumb} alt={props.channelName}/>
                    </div>
                    <div className="right">
                        <h1 className="title">{props.title}</h1>
                        <p className="description">{props.channelName}</p>
                        <p className="description">{props.view}</p></div></div>
                        </Link>
        </article>
    )
}
export default Card