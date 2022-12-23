import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Footer() {
  return (
    <div>
       <Card>
      <Card.Header as="h5"  style={{textAlign:"center"}}>ABOUT</Card.Header>
      <Card.Body>
        <Card.Title>Restaurants Near Yu!</Card.Title>
        <Card.Text style={{textAlign:"center"}}>
          Looking for the best restaurants in the town, we provide the best list in the country !

        </Card.Text>
        {/* <Button variant="primary">QUICK LINKS</Button> */}
      </Card.Body>
      <Card.Footer  style={{textAlign:"center"}} className="text-muted ">Check our page and share your feedback</Card.Footer>
    </Card>
    </div>
  )
}

export default Footer
