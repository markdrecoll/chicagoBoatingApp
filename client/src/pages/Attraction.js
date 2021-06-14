import React, {useState, useEffect} from 'react';
import attractionData from '../attractionData.json';
import API from "../utils/api";
import GoogleMap from "../components/GoogleMap"

function Attraction() {

  const [currentLocation, setCurrentLocation] = useState(
    {
      lat:41.87,
      lng:-87.62
    }
  )

  return (
    <div className="container row justify-content-center">
      <h1 className="col-12">Attractions You Can Boat To</h1>
      <h4>Below are a list of attractions that feature boat parking. Some of these require renting a dock parking spot using an app known as Dockwa. Download here on <a href="https://play.google.com/store/apps/details?id=com.dockwa.dockwa&hl=en_US&gl=US">Android</a> or <a href="https://apps.apple.com/us/app/dockwa/id991884112">iOS</a></h4>

      <GoogleMap 
      center2 = {currentLocation}
       />

      {attractionData.map((attraction) => (
        // add on click ability to make api call to set default attraction for the user
        <div className="card col-12 mx-2 my-2" key={attraction.id} onClick={()=> API.setAttractionForUser(attraction.name)}>
          <h2 className="card-header fluid">{attraction.name}</h2>
          <p><strong>Description:</strong> {attraction.description}</p>
          <img className="my-auto" src={attraction.image_link} alt={attraction.name} style={{backgroundSize: "cover"}}/>
        </div>
      ))}
    </div>
  );
}

export default Attraction;
