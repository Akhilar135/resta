import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Menu from './Menu';


function Restaurant({restaurant}) {
  return (
<>
    
     <Card style={{ width: '200px' }}>
     <Card.Img variant="top" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6sntxkpOK9B4mqSJHIgM3FqQrW7S6XxKlFcaQYRTC78aeZUw_KVWKSdQf8vnk9p4ineUk1eeK5zM&usqp=CAU&ec=48665699"/>
     <Card.Body>
       <Card.Title>{restaurant.name}</Card.Title>
       <Card.Text>
       {restaurant.city}
       </Card.Text>
       {/* <Button variant="primary">Go somewhere</Button> */}
     </Card.Body>
   </Card>
   </>
  )
}

export default Restaurant