import React from 'react';
import attractionData from '../attractionData.json';
import API from "../utils/api";
import GoogleMap from "../components/GoogleMap"

function Attraction() {
  return (
    <div className="container row justify-content-center">
      <h1 className="col-12">Attractions You Can Boat To</h1>
      <p>Below are a list of attractions that feature boat parking. Some of these require renting a dock parking spot using an app known as Dockwa.</p>

      <GoogleMap />

      {attractionData.map((attraction) => (
        // add on click ability to make api call to set default attraction for the user
        <div className="card col-lg-3 mx-2 my-2" style={{"width" : "18rem"}} key={attraction.id} onClick={()=> API.setAttractionForUser(attraction.name)}>
          <h2 className="card-header fluid">{attraction.name}</h2>
          <ul>
            <li>
              <strong>Description:</strong> {attraction.description}
            </li>
            <li>
              <img src={attraction.image_link} alt={attraction.name} />
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Attraction;
