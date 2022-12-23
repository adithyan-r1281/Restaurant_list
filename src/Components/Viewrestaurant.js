import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';
function Viewrestaurant() {
  const params=useParams();
  console.log(params.id);
   //To hold the value
   const [allRestaurants,setRestaurants]=useState([])
   //function to call API to get all restaurant information from 
   //restaurant.json

   const getRestaurants=async()=>{
    await fetch('/restaurants.json')
    .then((data)=>{
     data.json()
        .then((result)=>{
           // console.log(result);
           setRestaurants(result.restaurants)
        })
     
     // console.log(data);
    })
   
   }
   
   useEffect(()=>{
       getRestaurants()
    },[])
    console.log(allRestaurants);
  const viewrest=allRestaurants.find(item=>item.id==params.id)
  console.log(viewrest);
  return (
    <>
    { 
    viewrest?(
        <Row>
          <Col>
            <Image src={viewrest.photograph} fluid/>
          </Col>
          <Col>
            <p>ID:{viewrest.id}</p>
            <h3>Name:{viewrest.name}</h3>
            <h4>Neighborhood:{viewrest.neighborhood}</h4>
            <h5>Address:{viewrest.address}</h5>
            <h5>Cuisine_types:{viewrest.cuisine_type}</h5>
              <Restoperation operate={viewrest.operating_hours}/> <br/>
              <Restreview review={viewrest.reviews}/>
          </Col>
        </Row>

    ):'null'
     
    }
    </>
  )
}

export default Viewrestaurant