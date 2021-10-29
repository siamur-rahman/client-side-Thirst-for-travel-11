import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { faPhone, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './ServiceDetails.css';
import { Container, Card, Row, Col } from 'react-bootstrap';

const ServicesDetails = () => {

   const { id } = useParams();
   const [services, setServices] = useState([]);
   const [singleService, setSingleService] = useState({});

   useEffect(() => {
      fetch('/serviceDetails.json')
         .then(res => res.json())

         .then(data => setServices(data))
   }, [])

   useEffect(() => {
      const foundService = services.find(service =>
         service.id === id)
      setSingleService(foundService);

   }, [services])

   return (
      <div className="single-service">
         <Header></Header>
         <div >
            <Container className=" d-flex  justify-content-center ">

               <Row >
                  <Col md={6}>
                     <Card style={{ width: '18rem' }}>
                        <div className="d-flex justofy-content-center">
                           <Card className="d-flex justofy-content-center  ">
                              images dynamic on src
                              <Card.Img variant="top" src="" />
                           </Card>
                        </div>
                        <Card.Body className="cardss">
                           <Card.Title>dynamic name</Card.Title>
                           <Card.Text>dynamic description
                           </Card.Text>
                           <Link to={`/Order`}>
                              <button className=" details-btn btn btn-warning"><FontAwesomeIcon icon={faTrashAlt} />Delete</button>
                           </Link>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>
               <Row className=" d-flex  justify-content-center mx-5 px-5" >
                  <Col md={6}>
                     <h2>address</h2>
                     <h2>form</h2>
                  </Col>
               </Row>
            </Container>
         </div>
         <Footer></Footer>
      </div >
   );
};

export default ServicesDetails;