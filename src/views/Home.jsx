import 'bootstrap/dist/css/bootstrap.min.css';

import {NavbarComp} from '../components/Navbar';
import {Col, Container, Card, ListGroup, Button} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';

import pizzadatabase from '../components/Pizzas';

const Home = () => {

    const pizzas = pizzadatabase;
    const navigate = useNavigate();

    const searchPizza = (id) => {
        navigate(`/pizza/${id}`);
    };

    return (
        <>
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                {pizzas.map(item =>(
                <Col className="text-center" key ={item.id}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Img variant="top" className="custom-img-size" src={item.img} />
                        <Card.Body>
                            <Card.Title><h3>{item.name}</h3></Card.Title>
                            <Card.Text>
                            &#127829; Ingredientes: {item.ingredients}.                            
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><h2>{item.price}</h2></ListGroup.Item>                           
                        </ListGroup>
                        <Card.Body>
                            <Button className="mx-1 text-white" 
                                variant="warning" 
                                onClick={() =>searchPizza(item.id)} >
                                Ver Más
                            </Button>
                            <Button className="mx-1" variant="danger">Comprar</Button>                          
                        </Card.Body>
                    </Card>                    
                </Col> ))}                                           
            </Container>                  
        </>
    );
}

export default Home;