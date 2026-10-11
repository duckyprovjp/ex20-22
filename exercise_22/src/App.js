import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Home = () => <div className="text-center mt-2">Home Component</div>;
const About = () => <div className="text-center mt-2">About Component</div>;
const Contact = () => <div className="text-center mt-2">Contact Component</div>;
const Profile = () => {
  const { id } = useParams();
  return <div className="text-center mt-2">Profile Component {id}</div>;
};

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" className="px-3">
      <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id?" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
