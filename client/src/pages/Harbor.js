import React from 'react';
import harborData from '../harborData.json';

function Harbor() {
  return (
    <div className="container row justify-content-center">
      <h1 className="col-12">Harbor List Contact Info</h1>
      {harborData.map((harbor) => (
        <div className="card col-3 mx-2 my-2" key={harbor.id}>
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
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Harbor;
