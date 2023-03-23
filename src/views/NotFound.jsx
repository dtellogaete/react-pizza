import 'bootstrap/dist/css/bootstrap.min.css';


import {NavbarComp} from '../components/Navbar';
import {Col, Container} from 'react-bootstrap';

const NotFound = () => {
    return (
        <> 
            <NavbarComp/>
            <Container style = {{ display: 'flex'}} className="back">
                <Col className="text-center">
                    <h1 className="text-center">Página no encontrada &#127790;</h1>                    
                    <img src="https://cdn.pixabay.com/photo/2013/07/13/09/37/taco-155812_960_720.png" alt='taco' width="400"  height="341"></img>                    
                </Col>                      
            </Container>                  
        </>
    );
}

export default NotFound;