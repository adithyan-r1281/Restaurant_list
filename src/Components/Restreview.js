import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restreviews({review}) {
    console.log(review);
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Button variant='dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
         { 
         review.map(item=>(
            <>
                <h5>{item.name}</h5>
                <span></span>
                <h6>{item.date}</h6>
                <br></br>
                <h6>{item.rating}</h6>
                <br></br>
                <h6>{item.comments}</h6>
            </>
         ))
          }
        </div>
      </Collapse>
    </div>
  )
}

export default Restreviews