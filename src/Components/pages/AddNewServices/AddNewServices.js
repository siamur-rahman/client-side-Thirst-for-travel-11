import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AddNewServices.css';

const AddNewServices = () => {
   const { register, handleSubmit, reset } = useForm();

   const onSubmit = data => {
      console.log(data);
      axios.post('https://quiet-taiga-96181.herokuapp.com/services', data)
         .then(res => {

            if (res.insertedId) {
               alert('added successfully');
               reset()
            }
            console.log(res)
         })
   }
   return (
      <div id="addNewService" className="add-service ">
         <Header></Header>
         <Container className="d-flex  justify-content-center ">
            <Row className="   my-5  " >
               <Col md={6}>

                  <form onSubmit={handleSubmit(onSubmit)}>
                     <h2>Add a new service</h2>
                     <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" /><br />
                     <textarea {...register("description")} placeholder="description" /><br />
                     <input type="number" {...register("price")} placeholder="package price" /><br />
                     <input {...register("img")} placeholder="img url" /><br />
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