import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
  return (
    <Navbar expand="lg" bg='primary' variant='dark' collapseOnSelect>
      <Container>

        <LinkContainer to="/">
          <Navbar.Brand>Lovetohaveit</Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <LinkContainer to="/cart">
              <Nav.Link><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/user">
              <Nav.Link><i className='fas fa-user'></i> User</Nav.Link>
            </LinkContainer>

            <NavDropdown title="Category" id="basic-nav-dropdown">

              <LinkContainer to="/clothes">
                <NavDropdown.Item>Clothes</NavDropdown.Item>
              </LinkContainer>

              <LinkContainer to="/bags">
                <NavDropdown.Item>Bags</NavDropdown.Item>
              </LinkContainer>

              <NavDropdown.Divider />

            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
