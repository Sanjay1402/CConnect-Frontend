import Navbar from "../HomePage/Navbar"; 
import React from 'react'
import { Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import dummyprofile from "../assets/images/dummy-profile-pic.jpeg";
import axios from 'axios';

const handleBookClick = async (itemId, quantity) => {
  try {
    const response = await axios.post('/create-checkout-session', {
      items: [
        { id: itemId, quantity: quantity }
      ]
    });
    window.location = response.data.url;
  } catch (error) {
    console.error('Error during checkout:', error);
  }
};

const Features = () => {
  const services = [
    { id: 1, name: 'Ali', description: 'Providing the basic painting services in local area' },
    { id: 2, name: 'Ahmed', description: 'Providing the basic electrican services' },
    { id: 3, name: 'Yasir', description: 'Providing the water services in local area' },
    { id: 4, name: 'Nirmal', description: 'Providing basic medical services to the local area' },
    { id: 5, name: 'Sanjay', description: 'Provide techinal services in local area' },
    { id: 6, name: 'Saleem', description: 'Provide basic repairing services like washbasin repairing' },
    { id: 7, name: 'Lokesh', description: 'Providing basic home cleaning services in local area' },
    { id: 8, name: 'Bimal', description: 'Providing some electronic services' },
    { id: 9, name: 'Sandeep', description: 'Providing the Home cleaning Services' },
    { id: 10, name: 'Maaz', description: 'Providing some cooking in local area' },
    { id: 11, name: 'Shah', description: 'Providing some ac repairing in local area' },
    { id: 12, name: 'Naseem', description: 'Providing some tv repairing in local area' },
  ];

  return (
    <div className="overflow-hidden">
      < Navbar/>
      <Row style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center'}}>
        {services.slice(0, 4).map(service => (
          <Card key={service.id} style={{ width: '17rem', marginLeft: '2rem'}}>
            <Card.Img variant="top" src={dummyprofile}/>
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Button 
                variant="primary"
                onClick={() => handleBookClick(service.id, 1)}
              >
                Book
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <Row style={{marginTop: '2rem', display: 'flex', justifyContent: 'center'}}>
        {services.slice(4, 8).map(service => (
          <Card key={service.id} style={{ width: '17rem', marginLeft: '2rem'}}>
            <Card.Img variant="top" src={dummyprofile}/>
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Button 
                variant="primary"
                onClick={() => handleBookClick(service.id, 1)}
              >
                Book
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <Row style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center'}}>
        {services.slice(8, 12).map(service => (
          <Card key={service.id} style={{ width: '17rem', marginLeft: '2rem'}}>
            <Card.Img variant="top" src={dummyprofile}/>
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Button 
                variant="primary"
                onClick={() => handleBookClick(service.id, 1)}
              >
                Book
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  )
}

export default Features;
