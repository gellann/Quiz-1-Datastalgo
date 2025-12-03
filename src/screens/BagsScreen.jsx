import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";



function BagsScreen() {

    const bags = products.slice(3); 

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bags</h1>
      <p>Browse our latest collection of bags and everyday essentials.</p>

      <Row>
        {bags.map((bag) => (
          <Col key={bag._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={bag} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default BagsScreen;
