import React from 'react';
import './style/search.css';
function Search(props){
    return(  
        <header className= {props.light}>
        <img src={props.logo} alt="Logo"/>
       <div className="search-bar">
         <input placeholder="Search" value=""/>
        <a className="">Search</a>
         </div>
      </header>    
    )
}
export default Search