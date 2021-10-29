import React from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Service.css';
import { Container, Card, Row, Col } from 'react-bootstrap';


const Service = ({ service }) => {
    // const { id, name, description, img } = service;
    const { id } = service;
    return (
        <Container id="service" className=" p-5 service-cards">

            <Row>
                <Col md={5}>
                    <div>
                        <Card>
                            <Card.Img variant="top" src="" />
                        </Card>
                    </div>
                </Col>
                <Col md={7}>
                    <Card style={{ width: '18rem' }} >
                        <Card.Body className="cart-dody">

                            <Card.Title>name</Card.Title>
                            <Card.Text>description
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Link to={`/home/${id}`}>
                <div className=" w-100 align-items-center ">
                    <button className="  btn-warn mt-3">
                        <FontAwesomeIcon icon={faShoppingCart} /> Book now </button>
                </div>
            </Link>
        </Container>
    );
};

export default Service;