import { Container, ListGroup } from 'react-bootstrap';
import { CardProduct } from '../components/CardProduct';

export default function Productos() {
  return (
    <Container className="mt-4">
      <h2>Productos en Stock:</h2>
  

      <CardProduct/>       


    </Container>
  );
}
