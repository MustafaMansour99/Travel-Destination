import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom";
import './Home.css'

function Home() {
    return (
        <div className='home'>
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100px' }}></Container>
            <Button onClick={useNavigate} variant="primary" size="lg" className="my-button" href="/city">
                Go To List Card</Button>
        </div>

    )
}

export default Home