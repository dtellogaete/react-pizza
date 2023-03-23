import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComp} from '../components/Navbar';
import {Col, Container, ListGroup} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import pizzadatabase from '../components/Pizzas';

import { useState, useEffect } from 'react';

import {useParams, Link} from 'react-router-dom';

const Pizzas = () => {  

    const { id } = useParams();

    const pizzas = pizzadatabase;

    console.log(pizzas)

    const pizza = pizzas.find(pizza => pizza.id ===  parseInt(id, 10));
       
      

    console.log(id)
    console.log("piza")
    

    return (
        <>
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="justify-content-center" style={{display:'flex', alignItems:'center'}} >                    
                    <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" className="custom-img-size" src={pizza.img} />
                    <Card.Body>
                        <Card.Title>{pizza.name}</Card.Title>     
                        Ingredientes: {pizza.ingredients}                 
                    </Card.Body> 
                    <Card.Body>
                        {pizza.description}                 
                    </Card.Body>                   
                    <Card.Body>                     
                    <Button className="justify-content-center" variant="danger" >
                        Añadir                      
                    </Button>                     
                    </Card.Body>
                    </Card>   
                </Col>                
            </Container>                          
        </>
    );
}

export default Pizzas;