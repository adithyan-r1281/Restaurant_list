import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Restaurantscards({restaurant}) {
    console.log(restaurant);
  return (
    <Link style={{textDecoration:'none',color:'white'}} to={`/viewrestaurant/${restaurant.id}`}>
      <Card id='cards' className='m-4'>
      <Card.Img variant="top" className='p-4' src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          {restaurant.neighborhood}
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
  )
}

export default Restaurantscards
