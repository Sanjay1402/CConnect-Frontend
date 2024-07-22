import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../HomePage/Navbar';
import DetailsSection from '../footer/FOOTER'

const ServicesPage = () => {
  const { categoryId } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get(`http://localhost:3000/services/${categoryId}`);
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    }

    fetchServices();
  }, [categoryId]);

  return (
    <>
      <Navbar />
      <div className="container mt-5 mb-5">
        <h1 className="mb-4">Services</h1>
        <ul className="list-group">
          {services.map(service => (
            <li key={service.SERVICE_ID} className="list-group-item">
              <Link to={`/service/${service.SERVICE_ID}`} className="text-decoration-none">
                {service.SERVICENAME}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <DetailsSection />
    </>
  );
};

export default ServicesPage;
