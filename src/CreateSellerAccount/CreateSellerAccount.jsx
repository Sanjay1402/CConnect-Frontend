import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from '../HomePage/Navbar';

const CreateSellerAccount = () => {
  const [dropdowns, setDropdowns] = useState([{ category: '', services: [{ service: '', description: '', price: '', duration: '' }] }]);

  const handleAddDropdown = () => {
    setDropdowns([...dropdowns, { category: '', services: [{ service: '', description: '', price: '', duration: '' }] }]);
  };

  const handleAddService = (index) => {
    const newDropdowns = [...dropdowns];
    newDropdowns[index].services.push({ service: '', description: '', price: '', duration: '' });
    setDropdowns(newDropdowns);
  };

  const handleRemoveDropdown = (index) => {
    const newDropdowns = [...dropdowns];
    newDropdowns.splice(index, 1);
    setDropdowns(newDropdowns);
  };

  const handleRemoveService = (index, serviceIndex) => {
    const newDropdowns = [...dropdowns];
    newDropdowns[index].services.splice(serviceIndex, 1);
    setDropdowns(newDropdowns);
  };

  const handleChange = (index, serviceIndex, event) => {
    const { name, value } = event.target;
    const newDropdowns = [...dropdowns];
    newDropdowns[index].services[serviceIndex][name] = value;
    setDropdowns(newDropdowns);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
    console.log(dropdowns);
  };

  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-center">John Doe</h1>
        <h1 className="my-4">Add Your Services</h1>
        <Form onSubmit={handleSubmit}>
          {dropdowns.map((dropdown, index) => (
            <div key={index} className="mb-4 border p-3">
              <Row className="mb-3">
                <Col>
                  <Form.Group controlId={`category-${index}`}>
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                      as="select"
                      name="category"
                      value={dropdown.category}
                      onChange={(e) => handleChange(index, 0, e)}
                    >
                      <option value="">Select Category</option>
                      <option value="category1">Category 1</option>
                      <option value="category2">Category 2</option>
                      <option value="category3">Category 3</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
                <Col xs="auto" className="d-flex align-items-end">
                  <Button  className="text-decoration-none text-secondary" variant="link" onClick={() => handleRemoveDropdown(index)}>
                    &times;
                  </Button>
                </Col>
              </Row>
              {dropdown.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="mb-3 border p-2">
                  <Row>
                    <Col>
                      <Form.Group controlId={`service-${index}-${serviceIndex}`}>
                        <Form.Label>Service</Form.Label>
                        <Form.Control
                          as="select"
                          name="service"
                          value={service.service}
                          onChange={(e) => handleChange(index, serviceIndex, e)}
                        >
                          <option value="">Select Service</option>
                          <option value="service1">Service 1</option>
                          <option value="service2">Service 2</option>
                          <option value="service3">Service 3</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    
                    <Col>
                      <Form.Group controlId={`price-${index}-${serviceIndex}`}>
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                          type="number"
                          name="price"
                          step="0.01"
                          value={service.price}
                          onChange={(e) => handleChange(index, serviceIndex, e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group controlId={`duration-${index}-${serviceIndex}`}>
                        <Form.Label>Duration</Form.Label>
                        <Form.Control
                          type="number"
                          name="duration"
                          step="0.01"
                          value={service.duration}
                          onChange={(e) => handleChange(index, serviceIndex, e)}
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="auto" className="d-flex align-items-end">
                        <Button
                            variant="link"
                            className="text-decoration-none text-secondary"
                            onClick={() => handleRemoveService(index, serviceIndex)}
                        >
                            &times;
                        </Button>
                    </Col>
                    <br/>
                    <Row>
                      <Form.Group controlId={`description-${index}-${serviceIndex}`}>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          as="textarea"
                          type="text"
                          name="description"
                          value={service.description}
                          onChange={(e) => handleChange(index, serviceIndex, e)}
                        />
                      </Form.Group>
                    </Row>
                   
                  </Row>
                </div>
              ))}
              <Button variant="secondary" onClick={() => handleAddService(index)}>
                Add More Service
              </Button>
            </div>
          ))}
          <Button variant="primary" onClick={handleAddDropdown}>
            Add More Category
          </Button>
          <div className="d-flex flex-row-reverse mt-3">
            <Button variant="success" type="submit" className="ml-3">
              Submit
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default CreateSellerAccount;
