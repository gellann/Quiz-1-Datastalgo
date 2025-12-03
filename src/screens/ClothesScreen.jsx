import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";


function ClothesScreen() {

  const clothes = products.filter((item) => item.category === "clothes");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Clothes</h1>
      <p>Browse our latest collection of clothing items.</p>
      <Row>
        {clothes.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ClothesScreen;
