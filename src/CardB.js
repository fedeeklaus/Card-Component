import React from 'react'
import './CardB.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 1
      }}
  />
);



export default function CardB() {
  let nft = {
    nombre: "Equilibrium # 3429",
    desc: "Our Equilibrium collection promotes balance and calm",
    price: 0.041,
    mon: "ETH",
    time: "3 days left",
    
    foto: "https://i.ibb.co/y456BcD/image-equilibrium.jpg",
    creatorFoto: "https://i.ibb.co/ZWmrbdw/284101758-342805047960043-287537040953988030-n.jpg",
    nameCreator: "Federico Klaus"

  }







  return (
    <div>

 <Card style={{ width: '18rem', padding: '0.7rem' }}>
      <Card.Img variant="top" src={nft.foto} />
      <Card.Body style={{ height:'6rem'}}>
        <Card.Title style={{color: 'hsl(218, 44%, 22%)'}}>{nft.nombre} </Card.Title>
        <Card.Text style={{color: 'hsl(220, 15%, 55%)'}}>
         {nft.desc}
        </Card.Text>
       
      </Card.Body>
      <Card.Body style={{ height:'2rem'}}>
        <Card.Link ><span><svg width="11" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z" fill="#00FFF8"/></svg></span>{"   " + nft.price + nft.mon} </Card.Link>
        <Card.Link ><span><svg width="17" height="17" xmlns="http://www.w3.org/2000/svg"><path d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z" fill="#8BACD9"/></svg></span>{nft.time} </Card.Link>
      </Card.Body>
     <ColoredLine color="grey"></ColoredLine>
      <ListGroup className="list-group-flush">
        <ListGroup.Item><span className="avatares"> <img className="avatar" src={nft.creatorFoto} alt="" /> Creation of <span className="nameCreator"> {nft.nameCreator}</span></span> </ListGroup.Item>
       
      </ListGroup>
    </Card>
    </div>
  );
}


  