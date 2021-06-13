import React, {useState, useEffect} from 'react';
import harborData from '../harborData.json';
import API from "../utils/api";
import GoogleMap from "../components/GoogleMap"
// import e from 'cors';

function Harbor(props) {
    const [favHarbor, setFavHarbor]=useState('')
console.log('this mah props', props)
    useEffect(() => {
        handleHarborSave();
      }, []);
const handleHarborSave=(harborName)=>{
    API.setHarborForUser(harborName).then((data)=>{
        console.log(data)
        setFavHarbor(data.data.harbor)
    })
}
  return (
    <div className="container row justify-content-center">
      <h1 className="col-12 bg-light p-5">Harbor Information</h1>
      


      <GoogleMap />
        <div className="bg-light p-5">
        <h2>Choose your favorite Harbor</h2>
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
              <strong>Fax:</strong> {harbor.fax}
            </li>
            <li>
              <strong>Email:</strong> {harbor.email}
            </li>
            {/* MAKE THIS PASS IN LAT AND LONG TO GOOGLE MAPS
            <li>
              <button data-address={harbor.address}>Map</button>
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
