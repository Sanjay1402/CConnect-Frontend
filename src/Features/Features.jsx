
import Navbar from "../HomePage/Navbar"; 
import React from 'react'
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dummyprofile from "../assets/images/dummy-profile-pic.jpeg";


const Features = () => {
  return (
    <div className="overflow-hidden">
    < Navbar/>
    <Row style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center'}}>
    <Card style={{ width: '17rem', marginLeft: '2rem'}}>
    
      <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Ali</Card.Title>
        <Card.Text>
          Providing the basic painting services in local area
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem', marginLeft: '2rem'}}>
      <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Ahmed</Card.Title>
        <Card.Text>
          Providing the basic electrican services
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem', marginLeft: '2rem' }}>
    <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Yasir</Card.Title>
        <Card.Text>
          Providing the water services in local area
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem',marginLeft: '2rem' }}>
    <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Nirmal</Card.Title>
        <Card.Text>
          providing basic medical services to the local area
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Row>
    <Row style={{marginTop: '2rem', display: 'flex', justifyContent: 'center'}}>
    <Card style={{ width: '17rem', marginLeft: '2rem'}}>
    <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Sanjay</Card.Title>
        <Card.Text>
          Provide techinal services in local area
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem', marginLeft: '2rem'}}>
    <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Saleem</Card.Title>
        <Card.Text>
          Provide basic repairing serives like washbasin repairing.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem', marginLeft: '2rem' }}>
    <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Lokesh</Card.Title>
        <Card.Text>
          Providing basic home cleaning services in local area
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem',marginLeft: '2rem' }}>
    <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Bimal</Card.Title>
        <Card.Text>
          Providing some electronic servies
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Row>
    <Row style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center'}}>
    <Card style={{ width: '17rem', marginLeft: '2rem'}}>
    <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Sandeep</Card.Title>
        <Card.Text>
          Providing the Home cleaing Services
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem', marginLeft: '2rem'}}>
    <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Maaz</Card.Title>
        <Card.Text>
          Providing some cooking in local area
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem', marginLeft: '2rem' }}>
    <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Shah</Card.Title>
        <Card.Text>
            Providing some ac repairing in local area
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '17rem',marginLeft: '2rem', marginTop: '2rem'}}>
    <Card.Img variant="top" src={dummyprofile}/>
      <Card.Body>
        <Card.Title>Naseem</Card.Title>
        <Card.Text>
             Providing some tv repairing in local area.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Row>

    </div>
  )
}

export default Features