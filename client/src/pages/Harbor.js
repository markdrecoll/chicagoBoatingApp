import React, { useEffect, useState } from 'react';
import harborData from "../../harborData.json"

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
        
        
        <h3>Belmont</h3>

        <p1>Address:3600 Recreation Drive Chicago IL, 60613</p1>
        <p2>Phone:312-742-7673</p2>
        <p3>Fax:312-742-7695</p3>
        <p4>Email:belmont@chicagoharbors.com</p4>

        <h4>Diversey</h4>

        <p1>Address:2601 N. Cannon Drive Chicago, Il 60614</p1>
        <p2>Phone:312-669-4123</p2>
        <p3>Fax:312-742-7928</p3>
        <p4>Email:diversey@chicagoharbors.com</p4>

        <h5>DuSable</h5>

        <p1>Address:111 N. Lake Shore Drive Chicago, IL 60601</p1>
        <p2>Phone:312-742-3577</p2>
        <p3>Fax:312-742-3598</p3>
        <p4>Email:dusable@chicagoharbors.com</p4>

        <h6>Monroe</h6>

        <p1>Address:Foot of Monroe Street Chicago, IL 60603</p1>
        <p2>Phone:312-742-7643</p2>
        <p3>Fax:312-742-7854</p3>
        <p4>Email:monroeharbor@gmail.com</p4>

        <h7>Burnham</h7>

        <p1>Address:1559 S. Lake Shore Drive Chicago, IL 60605</p1>
        <p2>Phone:312-747-7009</p2>
        <p3>Fax:312-747-7347</p3>
        <p4>Email:burnham@chicagoharbors.com</p4>

        <h8>31st Street</h8>

        <p1>Address:3155 S. Lake Shore Dr. Chicago, IL 60616</p1>
        <p2>Phone:312.225.6464</p2>
        <p3>Fax:312.225.5770</p3>
        <p4>Email:31stStreet@chicagoharbors.com</p4>

        <h9>59th Street</h9>

        <p1>Address:5900 S. Lake Shore Drive Chicago, IL 60615</p1>
        <p2>Phone:312-609-9002</p2>
        <p3>Fax:312-747-6282</p3>
        <p4>Email:59thstreet@chicagoharbors.com</p4>

        <h10>Jackson Park Inner</h10>

        <p1>Address:6400 S. Lake Shore Drive Chicago, IL 60613</p1>
        <p2>Phone:773-288-7106</p2>
        <p3>Fax:773-288-1066</p3>
        <p4>Email:jacksoninner@chicagoharbors.com</p4>

        <h11>Jackson Park Outer</h11>

        <p1>6400 S. Coast Guard Drive Chicago, IL 60649</p1>
        <p2>Phone:773-947-8501</p2>
        <p3>Fax:773-947-8508</p3>
        <p4>Email:jacksonouter@chicagoharbors.com</p4>

        
        </>
    )
}

export default Harbor;