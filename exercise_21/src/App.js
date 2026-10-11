import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { Navbar, Nav, Container, Row, Col, Card } from 'react-bootstrap';

const users = [
  { firstName: "John", lastName: "Done", age: 25 },
  { firstName: "Mary", lastName: "Thompson", age: 35 },
  { firstName: "John", lastName: "Smith", age: 30 },
  { firstName: "Emily", lastName: "Johnson", age: 25 },
  { firstName: "William", lastName: "Davis", age: 34 }
];

const dishes = [
  {
    id: 0,
    name: "Uthappizza",
    image: "images/uthappizza.png",
    category: "mains",
    label: "Hot",
    price: "4.99",
    featured: true,
    description: "A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."
  },
  {
    id: 1,
    name: "Zucchipakoda",
    image: "images/zucchipakoda.png",
    category: "appetizer",
    label: "",
    price: "1.99",
    featured: false,
    description: "Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"
  },
  {
    id: 2,
    name: "Vadonut",
    image: "images/vadonut.png",
    category: "appetizer",
    label: "New",
    price: "1.99",
    featured: false,
    description: "A quintessential ConFusion experience, is it a vada or is it a donut?"
  },
  {
    id: 3,
    name: "ElaiCheese Cake",
    image: "images/elaicheesecake.png",
    category: "dessert",
    label: "",
    price: "2.99",
    featured: false,
    description: "A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"
  }
];

const Home = () => {
  return (
    <Container className="pb-4">
      <div className="text-center my-2">Home</div>
      <div className="mb-4">
        {users.map((user, index) => (
          <div key={index} className="fs-4">
            <Link to={`/users/${index}`}>
              {user.firstName} {user.lastName}
            </Link>
          </div>
        ))}
      </div>
      <Row className="g-4 justify-content-center">
        {dishes.map((dish) => (
          <Col key={dish.id} xs={12} md={5}>
            <Card className="h-100">
              <Card.Img variant="top" src={`/${dish.image}`} alt={dish.name} />
              <Card.Body>
                <Link to={`/dishes/${dish.id}`}>{dish.name}</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const UserDetail = () => {
  const { id } = useParams();
  const user = users[id];
  if (!user) return <Container className="mt-3"><h2>User not found</h2></Container>;
  return (
    <Container className="mt-3">
      <h1>{user.firstName} {user.lastName} : {user.age}</h1>
    </Container>
  );
};

const DishDetail = () => {
  const { id } = useParams();
  const dish = dishes.find((d) => d.id === Number(id));
  if (!dish) return <Container className="mt-3"><h2>Dish not found</h2></Container>;
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card>
            <Card.Img variant="top" src={`/${dish.image}`} alt={dish.name} />
            <Card.Body>
              <Card.Title>{dish.name}</Card.Title>
              <Card.Text>Category: {dish.category}</Card.Text>
              <Card.Text>Price: ${dish.price}</Card.Text>
              <Card.Text>{dish.description}</Card.Text>
              <Link to="/">Back to Home</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

const About = () => <div className="text-center mt-2">About</div>;
const Contact = () => <div className="text-center mt-2">Contact</div>;

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="md" className="px-3">
        <Navbar.Brand as={Link} to="/">Logo</Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="/dishes/:id" element={<DishDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
