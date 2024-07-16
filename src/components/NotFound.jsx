import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import '../NotFound.css'

const NotFound = () => {
    return (
        <Container>
            <Col>
                <Row>
                    <Col>
                        <Image className="border border-warning rounded" src='src/assets/404.jpg' fluid/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1 className='fw-bold m-3'><strong>404 Not Found</strong></h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Use the link to the right to return home! -></p>
                    </Col>
                    <Col>
                        <Link to='/' className='text-decoration-underline'>Return Home</Link>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
};

export default NotFound;