import React from 'react'
import Card from 'react-bootstrap/Card';
import leaf from './images/dummy-leaf.png'


export default function ProductCard(props) {
  return (
    <div>
         <Card style={{ width: '18rem', margin: "15px" }}>
                    <Card.Img variant="top" src={props.image ? props.image : leaf} 
                    style={{width:props.image?"auto":"100px",height:props.image?"auto":"100px"}}/>
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                    </Card.Body>
                </Card>
    </div>
  )
}
