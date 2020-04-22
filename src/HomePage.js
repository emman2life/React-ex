import React from 'react';
import Card from './Card.js';
import Search from './Search';
import './style/HomePage.css'

function HomePage() {
  //Data
  const information = require('./information.json');
  const cards = information.map((item) =>
  <Card key={item.id} id={(item.id).toString()} title={item.title} channelName={item.channelName} media={require("./images/"+item.media+".jpg")} view={item.views+" views"} description={item.description}  channelThumb={require("./images/channels/"+item.channelThumb+".jpg")}/>
  )
  //render
  return (
    <div className="HomePage">
    <Search
    logo = {require('./images/logo/logo-light.svg')}
    light = {'header light'}
    />
      <div className="container">
        <h1 className="title-top">Recommended</h1>
      <section className="grid">
        {cards}
      </section>
      </div>
    </div>
  );
}

export default HomePage;