import React from "react";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

import Tours from "../tours/Tours";
import './Home.css'
function Home() {
    return (
        <div className='home'>
            <Button onClick={useNavigate} variant="primary" size="lg" href="/city">
              Go To List Card</Button>
        </div>

    )
}

export default Home