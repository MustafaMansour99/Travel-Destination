import React from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../../data/db.json';
import { useState } from 'react';
import './TourDetails.css'


function TourDetails() {
    const { id } = useParams();
    const information = data.filter((item) =>
        item.id === id
    )
    const value = information[0];
    console.log(value)
    const [showMore, setShowMore] = useState(false);

    const handleShowMoreClick = () => {
        setShowMore(!showMore);
    }
        return (

            <div className='tourDetails'>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={value.image} />
                    <Card.Body>
                        <Card.Text>
                            {showMore ? value.info : `${value.info.substring(0, 100)}...`}
                        </Card.Text>
                        <Button onClick={handleShowMoreClick}>
                            {showMore ? "Show less" : "Show more"}
                        </Button>
                    </Card.Body>
                </Card>

            </div>
        )
    }

    export default TourDetails