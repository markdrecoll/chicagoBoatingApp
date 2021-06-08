import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function Landing() {

    return (
        <>
        <h1>Landing Page</h1>
        <Link to='login'>Login</Link>
        </>
    )
}

export default Landing;