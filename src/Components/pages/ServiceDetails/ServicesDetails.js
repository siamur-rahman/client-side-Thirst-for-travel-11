import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import axios from 'axios';
import useFirebase from '../../hooks/useFirebase';
// import { Navbar } from 'react-bootstrap';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './ServiceDetails.css';


const ServicesDetails = () => {

   const { register, handleSubmit } = useForm();
   // const onSubmit = data => console.log(data);
   const { user } = useFirebase();

   const { id } = useParams();
   // console.log(id);
   const [services, setServices] = useState([]);
   // const [singleService, setSingleService] = useState({});

   useEffect(() => {
      const url = `http://localhost:5000/services/${id}`;
      // console.log(url);
      fetch(url)
         .then(res => res.json())

         .then(data => setServices(data))
   }, [id])

   const onSubmit = data => {
      console.log(data);

   }

   return (
      <div className="single-service">
         <Header></Header>
         <h1 className="d-flex justify-content-center mt-4">Booking Place</h1>
         <div >
            <Container className="add-service d-flex  justify-content-center ">
               <Row className="   my-5  " >
                  <Col md={6}>

                     <form onSubmit={handleSubmit(onSubmit)}>

                        <input type="email" {...register("email")} value={user.email} placeholder="email" /><br />
                        <input {...register("name")} value={user.displayName} placeholder="name" /><br />
                        <textarea {...register("address")} placeholder="address" /><br />
                        <input type="number" {...register("phone")} placeholder="phone" /><br />
                        <input type="submit" />

                     </form>
                  </Col>
               </Row>
               <Row className=" d-flex flex-direction-column w-100 justify-content-center  mb-5 " >
                  <Col md={6}>
                     <Card style={{ width: '18rem' }}>
                        <div className="">
                           <Card className="single-service">

                              <Card.Title>Get this Package</Card.Title>
                              <Card.Img variant="top" src={services.img} />
                           </Card>
                        </div>
                        <Card.Body className="cardss">
                           <Card.Title>{services.name}</Card.Title>
                           <Card.Text>{services.description}
                           </Card.Text>
                           <Link to={`/Order`}>
                              <button className=" details-btn btn btn-warning"><FontAwesomeIcon icon={faTrashAlt} />Delete</button>
                           </Link>
                        </Card.Body>
                     </Card>
                  </Col>
               </Row>

            </Container>
         </div>
         <Footer></Footer>
      </div >
   );
};

export default ServicesDetails;