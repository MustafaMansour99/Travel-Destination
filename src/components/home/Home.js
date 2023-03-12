import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

import './Home.css'

function Home() {
    return (
        <div className='home'>
           
         <Container className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}></Container>
            <Link to='/city'><Button variant="primary" size="lg" className="my-button">
                Go To List Card</Button></Link>
        </div>

    )
}

export default Home