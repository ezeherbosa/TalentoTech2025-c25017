import { useEffect, useState } from 'react'
import { Container,Row,Card,Button,Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export function CardProduct() {

    const[products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        //llamda api
        fetch('https://fakestoreapi.com/products')
        .then(res=> res.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error en llamado a la api:', error);
            setLoading(true);
        });

    })


  return (
    <Container className="mt-4">
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4}>
            <Card className="m-2">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description.length > 100
                    ? product.description.substring(0, 100) + '...'
                    : product.description}
                </Card.Text>
                <Card.Text>
                  Precio: ${product.price}
                </Card.Text>

                <Button variant="primary">Agregar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
  );
}
