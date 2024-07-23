import React, { useState } from 'react';
import { Row, Button, Card, Modal, Form } from 'react-bootstrap';
import Navbar from "../HomePage/Navbar"; 
import dummyprofile from "../assets/images/dummy-profile-pic.jpeg";
import axios from 'axios';

const Features = () => {
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 1, name: 'Ali', description: 'Providing the basic painting services in local area', price: 100 },
    { id: 2, name: 'Ahmed', description: 'Providing the basic electrician services', price: 150 },
    { id: 3, name: 'Yasir', description: 'Providing the water services in local area', price: 200 },
    { id: 4, name: 'Nirmal', description: 'Providing basic medical services to the local area', price: 250 },
    { id: 5, name: 'Sanjay', description: 'Provide technical services in local area', price: 300 },
    { id: 6, name: 'Saleem', description: 'Provide basic repairing services like washbasin repairing', price: 350 },
    { id: 7, name: 'Lokesh', description: 'Providing basic home cleaning services in local area', price: 400 },
    { id: 8, name: 'Bimal', description: 'Providing some electronic services', price: 450 },
    { id: 9, name: 'Sandeep', description: 'Providing the Home cleaning Services', price: 500 },
    { id: 10, name: 'Maaz', description: 'Providing some cooking in local area', price: 550 },
    { id: 11, name: 'Shah', description: 'Providing some AC repairing in local area', price: 600 },
    { id: 12, name: 'Naseem', description: 'Providing some TV repairing in local area', price: 650 },
  ];

  const handleBookClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/create-checkout-session', {
        items: [
          { id: selectedService.id, quantity: 1, name: selectedService.name, address: address }
        ]
      });
      window.location = response.data.url;
    } catch (error) {
      console.error('Error during checkout:', error);
    }
    setShowModal(false);
  };

  return (
    <div className="overflow-hidden">
      <Navbar/>
      <Row style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        {services.slice(0, 4).map(service => (
          <Card key={service.id} style={{ width: '17rem', marginLeft: '2rem' }}>
            <Card.Img variant="top" src={dummyprofile} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Card.Text>Price: ${service.price}</Card.Text>
              <Button 
                variant="primary"
                onClick={() => handleBookClick(service)}
              >
                Book
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <Row style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        {services.slice(4, 8).map(service => (
          <Card key={service.id} style={{ width: '17rem', marginLeft: '2rem' }}>
            <Card.Img variant="top" src={dummyprofile} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Card.Text>Price: ${service.price}</Card.Text>
              <Button 
                variant="primary"
                onClick={() => handleBookClick(service)}
              >
                Book
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <Row style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center' }}>
        {services.slice(8, 12).map(service => (
          <Card key={service.id} style={{ width: '17rem', marginLeft: '2rem' }}>
            <Card.Img variant="top" src={dummyprofile} />
            <Card.Body>
              <Card.Title>{service.name}</Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Card.Text>Price: ${service.price}</Card.Text>
              <Button 
                variant="primary"
                onClick={() => handleBookClick(service)}
              >
                Book
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Timing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formDay">
              <Form.Label>Day</Form.Label>
              <Form.Control 
                type="date" 
                placeholder="Enter date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required 
              />
            </Form.Group>
            <Form.Group controlId="formDay">
              <Form.Label>Day</Form.Label>
              <Form.Control 
                type="day" 
                placeholder="Enter day" 
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required 
              />
            </Form.Group>
            <Form.Group controlId="formTime">
              <Form.Label>Time</Form.Label>
              <Form.Control 
                type="time" 
                placeholder="Enter time" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required 
              />
            </Form.Group>
            <Button variant="secondary" onClick={handleClose} style={{ marginRight: '10px', marginTop:'10px' }}>Close</Button>
            <Button type="submit" variant="primary">Proceed to Checkout</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Features;
