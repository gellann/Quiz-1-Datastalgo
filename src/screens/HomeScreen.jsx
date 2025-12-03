import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import heroImage from '../assets/storefront.jpg';

function HomeScreen() {
  return (
    <Container className="my-5">

      {/* Hero Section */}
      <section className="mb-5 text-center" style={{ backgroundColor: '#f8f9fa', padding: '40px', borderRadius: '10px' }}>
        <h1 className="mb-3 text-primary display-4">Welcome to Lovetohaveit</h1>
        <p className="lead mb-3">
          Affordable fashion for everyday confidence. Explore our curated collection of stylish clothes and bags that make you feel amazing without breaking the bank.
        </p>
        <Button href="/clothes" variant="primary" size="lg" className="me-2">Shop Clothes</Button>
        <Button href="/bags" variant="outline-primary" size="lg">Shop Bags</Button>

      {/* Facebook Link */}
      <div className="mt-3">
        <a 
          href="https://www.facebook.com/lab2haveit" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary"
        >
          Visit us on Facebook
        </a>
      </div>

        <div className="mt-4">
      <img 
        src={heroImage} 
        alt="Lovetohaveit Storefront" 
        className="img-fluid rounded shadow"
        style={{ maxHeight: '400px', objectFit: 'cover' }}
      />
     </div>
     </section>

      {/* About Section */}
      <section className="mb-5">
            <h2 className="mb-3 text-primary">About Lovetohaveit</h2>
            <p>
              Lovetohaveit is a DTI-registered small business based in San Fernando, Pampanga. What started as a teacher’s hobby became a passion for sharing affordable fashion with everyone.
            </p>
            <p>
              Our collection reflects quality, style, and comfort — helping you feel confident every day without overspending.
            </p>
      </section>

      {/* Mission Section with Card Highlight */}
      <section className="mb-5 text-center">
        <h2 className="mb-4 text-primary">Our Mission</h2>
        <Card className="bg-light shadow-lg p-4 mx-auto" style={{ maxWidth: '700px' }}>
          <Card.Body>
            <p className="mb-0 fs-5">
              To deliver stylish, high-quality, and affordable clothing and bags while staying true to our core values: simplicity, quality, and honest service.
            </p>
          </Card.Body>
        </Card>
      </section>

      {/* What We Do - Icon Cards */}
      <section className="mb-5">
        <h2 className="mb-4 text-primary text-center">What We Do</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm hover-effect p-3">
              <i className="fas fa-tshirt fa-2x text-primary mb-3"></i>
              <Card.Body>
                <Card.Title>Clothes for Every Occasion</Card.Title>
                <Card.Text>Comfortable and stylish clothing for work, casual days, and outings.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center shadow-sm hover-effect p-3">
              <i className="fas fa-shopping-bag fa-2x text-primary mb-3"></i>
              <Card.Body>
                <Card.Title>Trendy Bags</Card.Title>
                <Card.Text>Handpicked bags and essentials that match your everyday style.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="h-100 text-center shadow-sm hover-effect p-3">
              <i className="fas fa-thumbs-up fa-2x text-primary mb-3"></i>
              <Card.Body>
                <Card.Title>Customer-Focused</Card.Title>
                <Card.Text>We care about your satisfaction, quality, and experience shopping with us.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Why Choose Us Section */}
      <section className="mb-5">
        <h2 className="mb-4 text-primary text-center">Why Choose Lovetohaveit?</h2>
        <Row className="g-4">
          {[
            { title: "DTI Registered & Trusted", text: "A legitimate business committed to honest and reliable service." },
            { title: "Budget-Friendly Finds", text: "Stylish pieces at prices you’ll love." },
            { title: "Curated with Love", text: "Every item is carefully selected by the owner herself." },
            { title: "Trusted by Customers", text: "Loved for quality, affordability, and friendly service." },
            { title: "Proudly Local", text: "Based in San Fernando, Pampanga, serving customers nationwide." },
          ].map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm hover-effect p-3">
                <Card.Body>
                  <Card.Title>✓ {item.title}</Card.Title>
                  <Card.Text className="text-muted">{item.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  )
}

export default HomeScreen
