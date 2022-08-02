import React from 'react'
import './CardA.css'
import Card from 'react-bootstrap/Card';


export default function CardA() {
  
  return (
    <div>

 <Card style={{ width: '18rem', padding: '0.7rem' }}>
      <Card.Img variant="top" src="https://i.ibb.co/swTZYMK/image-qr-code.png" />
      <Card.Body style={{ height:'9.7rem'}}>
        <Card.Title style={{color: 'hsl(218, 44%, 22%)'}}>Improve your front-end skills by building projects</Card.Title>
        <Card.Text style={{color: 'hsl(220, 15%, 55%)'}}>
         Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </Card.Text>
       
      </Card.Body>
    </Card>
    </div>
  );
}


  

