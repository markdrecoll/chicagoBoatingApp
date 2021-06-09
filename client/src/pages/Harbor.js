import React, { useEffect, useState } from 'react';
import harborData from "../harborData.json"

function Harbor() {

    return (
        <>
        <h1>Harbor List Contact Info</h1>
        {harborData.map(harbor=>(
            <div key={harbor.id}>
            <h2>{harbor.name}</h2>
        <p1>Address:{harbor.address}</p1>
        <p2>Phone:{harbor.phone}</p2>
        <p3>Fax:{harbor.fax}</p3>
        <p4>Email:{harbor.email}</p4>
        </div>
        ))}

        
        </>
    )
}

export default Harbor;