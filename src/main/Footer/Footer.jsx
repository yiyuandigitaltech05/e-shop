import React from "react";
import "../Footer/Footer.css"
import { Link } from "react-router-dom";
import {Container ,Row ,Col , ListGroup ,ListGroupItem} from "reactstrap";
import { motion } from "framer-motion";
const Footer = () => {
  return(
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4">
          <div className="logo justify-start">
          <motion.span className="main_logo" whileHover={{ scale: 1.1 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </motion.span>
          <div>
            <h5 className="LogoName">Multimart</h5>
          </div>
        </div>
        <p className="logo_text mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, accusantium? Delectus maxime aspernatur quisquam hic unde debitis recusandae eveniet vero libero suscipit? Vero nam numquam natus iure delectus, distinctio possimus?</p>
          </Col>
          <Col lg="3">
            <div className="footer_quick-links">
              <h4 className="quick_links-title">Top</h4>
              <ListGroup className="mt-2">
                <ListGroupItem>
                  <Link to="#">Modern Chair</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="#">Modern Beach</Link>
                </ListGroupItem>
                <ListGroupItem>
                  <Link to="#">Mobile Phone</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="2"></Col>
          <Col lg="3"></Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;
