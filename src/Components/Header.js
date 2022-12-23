import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src='https://media-cdn.tripadvisor.com/media/photo-s/11/e2/8e/91/hoarding.jpg'
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Restaurants Near Yu!
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
