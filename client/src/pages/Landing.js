import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Landing() {

    return (
        <>
        <div class="jumbotron">
            <h1 class="display-4">Welcome to the Chicago Boating App</h1>
            <hr class="my-4" />
            <p>Sign Up or Log In to plan your next Lake Michigan adventure!</p>
            
            
        </div>
         <div  class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
              <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/b7/df.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item active">
            <img src="https://cache.desktopnexus.com/thumbseg/2352/2352281-bigthumbnail.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item active">
            <img src="https://pbs.twimg.com/media/D-QUJazWkAAwdeZ.jpg" class="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
        </>
    )
}

export default Landing;