import React, {useState, useEffect} from 'react';
import harborData from '../harborData.json';
import API from "../utils/api";
import GoogleMap from "../components/GoogleMap"

function Harbor(props) {
    const [favHarbor, setFavHarbor]=useState('')
    useEffect(() => {
        getHarbor()
      }, []);

const handleHarborSave=(harborName)=>{
    API.setHarborForUser(harborName).then((data)=>{
        setFavHarbor(data.data.harbor)
    })
    getHarbor()
}

const getHarbor =()=>{
    API.getHarborForUser()
            .then((res)=>{
                setFavHarbor(res.data)
            })
            .catch((err)=>console.log('no favorite'))
}

const [currentLocation, setCurrentLocation] = useState(
  {
    lat:41.87,
    lng:-87.62
  }
)

function viewHarborClick(e){
  setCurrentLocation(
    {
      lat:41.7772,
      lng:-87.5742
    }
  )
}

// lat:41.7772,
// lng:-87.5742


  return (
    <div className="container row justify-content-center">
      <h1 className="col-12 bg-light p-5">Harbor Information</h1>
      
      <GoogleMap 
      center2 = {currentLocation}
       />

        <div className="bg-light p-5">
        <h2>Choose your Harbor</h2>
        <h5>Save a Harbor as your designated harbor.</h5>
        </div>
        
      {harborData.map((harbor) => (
        // add on click ability to make api call to set default harbor for the user
        <div className="card col-lg-3 mx-2 my-2 border border-dark" key={harbor.id} >
          <h2 className="card-header fluid">{harbor.name}</h2>
          <ul>
            <li>
              <strong>Address:</strong> {harbor.address}
            </li>
            <li>
              <strong>Phone:</strong> {harbor.phone}
            </li>
            <li>
              <strong>Email:</strong> {harbor.email}
            </li>
            {/* MAKE THIS PASS IN LAT AND LONG TO GOOGLE MAPS
            <li>
              <button onClick={viewHarborClick}>Map</button>
              data-address={harbor.address}
            </li> */}
          </ul>
          <div className="footer mt-auto pb-2 pt-3 bg-light justify-content-center">
              {props.loginState === true?(<button className="btn btn-primary col-md-6 mb-2 me-2" onClick={()=>handleHarborSave(harbor.name)}>Save as Favorite</button>):(<button className="btn btn-primary col-md-6 mb-2 me-2 d-none" onClick={()=>handleHarborSave(harbor.name)}>Save as Favorite</button>)}
            
            {favHarbor === harbor.name?(<button className="btn btn-success mb-2">Favorite</button>):(<button className="btn btn-success d-none">Favorite</button>)}
          </div>
          
        </div>
      ))}
    </div>
  );
}

export default Harbor;
