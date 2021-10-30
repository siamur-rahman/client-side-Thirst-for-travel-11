import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AddNewServices.css';

const AddNewServices = () => {
   const { register, handleSubmit } = useForm();

   const onSubmit = data => {
      console.log(data);
      axios.post('http://localhost:5000/services', data)
         .then(res => { console.log(res) })
   }
   return (
      <div id="addNewService" className="add-service ">
         <Header></Header>
         <Container className="d-flex  justify-content-center ">
            <Row className="   my-5  " >
               <Col md={6}>

                  <form onSubmit={handleSubmit(onSubmit)}>
                     <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                     <textarea {...register("description")} placeholder="description" />
                     <input type="number" {...register("price")} placeholder="package price" />
                     <input {...register("img")} placeholder="img url" />
                     <input type="submit" />
                  </form>
               </Col>
            </Row>
         </Container>
         <Footer></Footer>
      </div>
   );
};

export default AddNewServices;