import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

const HomeCard = () => {
    return (
        <Card className="border border-dark">
            <Card.Body>
                <Card.Title className='bg-secondary text-white'>Thing Title!</Card.Title>
                <Card.Text className='bg-dark text-white'>
                    A whole bunch of text i na card about thing.
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default HomeCard;