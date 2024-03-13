import React from "react";
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";



export default function Header(){
  return(
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/img/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/about' className="about">About Us</Link>
            <Link to='/cuisines' className="cuisine">Cuisine</Link>
            <Link to='/popular' className="popular">Popular</Link>            
          </Nav>
        </Container>
      </Navbar>
  )
}
