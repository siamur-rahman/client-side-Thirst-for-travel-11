import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Card, Row, Col } from 'react-bootstrap';
// import { useForm } from "react-hook-form";
// import axios from 'axios';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './ServiceDetails.css';


const ServicesDetails = () => {

   // const { register, handleSubmit } = useForm();
   // const onSubmit = data => console.log(data);

   const { id } = useParams();
   // console.log(id);
   const [services, setServices] = useState([]);
   // const [singleService, setSingleService] = useState({});

   useEffect(() => {
      const url = `http://localhost:5000/services/${id}`;
      // console.log(url);
      fetch(url)
         .then(res => res.json())

         // .then(data => console.log(data))
         .then(data => setServices(data))
   }, [id])



   return (
      <div className="single-service">
         <Header></Header>
         <h1 className="d-flex justify-content-center mt-4">Booking Place</h1>
         <div >
            <Container className="add-service d-flex  justify-content-center ">

               <Row className=" d-flex flex-direction-column w-100 justify-content-center  my-5 " >
                  <Col md={6}>
                     <Card style={{ width: '18rem' }}>
                        <div className="">
                           <Card className="">

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