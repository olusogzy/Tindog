import React from "react";
import { Carousel , Container , Card} from 'react-bootstrap';



function Carousels() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <Card>
          <h1>
            Tina
          </h1>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card>
          <h1>
            Shawn
          </h1>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card>
          <h1>
            Greg
          </h1>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Card>
          
        </Carousel.Item>
      </Carousel>
    </Container>
    );
}

export default Carousels;