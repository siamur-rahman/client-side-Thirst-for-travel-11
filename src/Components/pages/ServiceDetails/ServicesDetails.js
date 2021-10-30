import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './ServiceDetails.css';


const ServicesDetails = () => {

   const { register, handleSubmit } = useForm();
   // const onSubmit = data => console.log(data);

   const { id } = useParams();
   const [services, setServices] = useState([]);
   const [singleService, setSingleService] = useState({});

   // useEffect(() => {
   //    fetch('/serviceDetails.json')
   //       .then(res => res.json())

   //       .then(data => setServices(data))
   // }, [])

   useEffect(() => {
      const foundService = services.find(service =>
         service.id === id)
      setSingleService(foundService);

   }, [])

   const onSubmit = data => {
      console.log(data);
      axios.post('http://localhost:5000/services', data)
         .then(res => { console.log(res) })
   }


   return (
      <div className="single-service">
         <Header></Header>
         <div >
            <Container className="add-service d-flex  justify-content-center ">

               <Row className=" d-flex flex-direction-column w-100 justify-content-center  my-5 " >
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
               {/* <Row className="   my-5  " >
                  <Col md={6}>

                     <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                        <textarea {...register("description")} placeholder="description" />
                        <input type="number" {...register("price")} placeholder="package price" />
                        <input {...register("img")} placeholder="img url" />
                        <input type="submit" />
                     </form>
                  </Col>
               </Row> */}
            </Container>
         </div>
         <Footer></Footer>
      </div >
   );
};

export default ServicesDetails;