import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import HomeCard from './HomeCard'

const Home = () => {
    return (
        <Container className="border border-danger">
            <Button variant="primary" className="shadow">Shop Now</Button>
            <HomeCard />
        </Container>
    );
};

export default Home;