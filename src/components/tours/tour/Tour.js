import './Tour.css';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
const data = require('../../../data/db.json')
function Tour() {
  const navigate =useNavigate();
  return (
    <div className='div'>
      {data.map((item) => {
       return(<Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={item.image} style={{ width: '18rem' }}/>
       <Card.Body>
         <Button className='btn' variant="primary" onClick={()=>navigate(`/city/${item.id}`)}>{item.name}</Button>
       </Card.Body>
     </Card>) 
      })
      }
    </div>
  )
}

export default Tour;
