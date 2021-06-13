import React from 'react';

function Landing() {
    return (
        <>
        <div className="p-5 bg-light">
            <h1 className="display-4">Welcome to the Chicago Boating App</h1>
            <hr className="my-4" />
            <h5>Sign Up or Log In to plan your next Lake Michigan adventure!</h5>
        </div>
         <div  id="myCarousel" className="carousel slide" data-ride="carousel" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
              <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6e/b7/df.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://cache.desktopnexus.com/thumbseg/2352/2352281-bigthumbnail.jpg" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://pbs.twimg.com/media/D-QUJazWkAAwdeZ.jpg" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
        </>
    )
}
export default Landing;