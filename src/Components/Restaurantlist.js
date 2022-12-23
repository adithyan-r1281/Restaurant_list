import React, { useEffect } from 'react'
import { useState } from 'react'
import Restaurantscards from './Restaurantscards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Restaurantlistaction } from '../Actions/restaurantlistaction';
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {
    //create a state to hold value 
    const [allRestaurants,setRestaurants]=useState([])
    //function to call API to get all restaurant information from restaurant.json
    // const getRestaurants=async()=>{
    //    await fetch('./restaurants.json')
    //    .then((data)=>{
    //     data.json()
    //     .then((result)=>{
    //       // console.log(result);
    //       setRestaurants(result.restaurants)
    //     })
    //     // console.log(data);
    //    })
      
    // }
    // console.log(allRestaurants);
    const dispatch=useDispatch();
      const result=useSelector(state=>state.restaurantReducer)
      console.log(result);
      const {restaurantList}=result
    useEffect(()=>{
        // getRestaurants()
        dispatch(Restaurantlistaction());
       },[])
  return (
    <Row>
      {
        restaurantList.map(item=>(
          // <h1>{item.name}</h1>
          <Col sm={12} md={5} lg={4} xl={3}>
            <Restaurantscards restaurant={item}/>
          </Col>
        ))
      }
    </Row>
  )
}

export default Restaurantlist
