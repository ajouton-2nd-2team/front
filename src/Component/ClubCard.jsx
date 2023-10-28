import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ClubCard = ({ club }) => {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '30px 15px 20px 15px', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
                <Card.Img variant="top" src={club.img} style={{ width: '100%', height: '200px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
                <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#f2f2f2' }}>
                    <Card.Title style={{ margin: '30px 20px 10px 20px' }}>{club.name}</Card.Title>
                    <div style={{ marginBottom: '10px' }}>
                        <Card.Text>{club.location}</Card.Text>
                        <Card.Text>{club.phone}</Card.Text>
                    </div>
                    <Link to={club.href}>
                        <Button variant="primary" style={{ width: '130px', height: '40px', backgroundColor: '#fff', borderColor: 'black', color: 'black' }}>
                            동아리 소개</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
};

export default ClubCard;