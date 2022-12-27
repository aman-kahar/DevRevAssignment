import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function BasicExample({movie}) {
  const {title,duration,img} = movie
  return (
    <Card style={{ width: '18rem', margin: '20px'}}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {duration}
        </Card.Text>
        <Button variant="primary">Book Tickets</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;