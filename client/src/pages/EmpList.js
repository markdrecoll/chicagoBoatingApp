import React, { useEffect, useState } from 'react';
import API from '../utils/api';
function EmpList() {

    const [empList, setEmpList] = useState([]);

    useEffect(() => {
        API.getAllEmps()
        .then(empData => setEmpList(empData.data))
     }, []);

    return (
        <>
        <h1>Employees List</h1>
        {empList.map(emp => (
            <div className="card" style={{"width": "18rem"}}>
            <img src={emp.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{emp.username}</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        ))}
        </>
    )
}

export default EmpList;