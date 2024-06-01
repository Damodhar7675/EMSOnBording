import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Dropdown,
  DropdownButton,
  ListGroup,
  ListGroupItem,
  Collapse,
  Button,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import { Typography } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';

const HrDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openOnboarding, setOpenOnboarding] = useState(false);
  const [openNewJoinee, setOpenNewJoinee] = useState(false);
  const [openOrientation, setOpenOrientation] = useState(false);
  const [openRequests, setOpenRequests] = useState(false);
  const [openIncoming, setOpenIncoming] = useState(false);
  const [openNoC, setOpenNoC] = useState(false);

  const toggleOnboarding = () => setOpenOnboarding(!openOnboarding);
  const toggleNewJoinee = () => setOpenNewJoinee(!openNewJoinee);
  const toggleOrientation = () => setOpenOrientation(!openOrientation);
  const toggleRequests = () => setOpenRequests(!openRequests);
  const toggleIncoming = () => setOpenIncoming(!openIncoming);
  const toggleNoC = () => setOpenNoC(!openNoC);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="d-flex" style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)' }}>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="https://media.licdn.com/dms/image/D560BAQF5Aj199kY35g/company-logo_200_200/0/1706348376133/anarghyacommunications_logo?e=2147483647&v=beta&t=_hxxKGPM-PIDp8NZrZz9hbXJtb_1qiDC-aXpFvMceZo"
              width="50"
              height="40"
              className="d-inline-block align-top"
              alt="Logo"
            />{' '}
            Anarghya Communications
          </Navbar.Brand>
          <Navbar.Text>{currentTime.toLocaleString()}</Navbar.Text>
          <Button variant="outline-light" className="ms-3">
            Logoff
          </Button>
        </Container>
      </Navbar>

      <div className="sidebar" style={{ width: '240px', paddingTop: '60px', backgroundColor: '#343a40', color: 'white' }}>
        <ListGroup>
          <ListGroupItem style={{ backgroundColor: '#343a40', borderColor: '#343a40' }}>
            <img
              src="https://t4.ftcdn.net/jpg/05/17/69/51/360_F_517695126_xVHlxMfMqZlBw1dtwgtiRKjunSjxX0wj.jpg"
              alt="Profile Picture"
              className="rounded-circle"
              style={{ width: '40px', height: '40px' }}
            />
            <span className="ms-2 text-light">HR Emp Profile</span>
          </ListGroupItem>
          <ListGroupItem action style={{ backgroundColor: '#343a40', borderColor: '#343a40' }}>
            <Link to="#" className="text-light text-decoration-none">
              Update Profile
            </Link>
          </ListGroupItem>
          <ListGroupItem action style={{ backgroundColor: '#343a40', borderColor: '#343a40' }}>
            <Link to="#" className="text-light text-decoration-none">
              Change Password
            </Link>
          </ListGroupItem>
          <Typography variant='h5' sx={{ backgroundColor: "yellowgreen", padding: '0.5rem' }}>On-Boarding</Typography>
          <ListGroupItem action onClick={toggleOnboarding} style={{ backgroundColor: '#495057', borderColor: '#495057' }}>
            Employee Request
          </ListGroupItem>
          <Collapse in={openOnboarding}>
            <ListGroup>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Approved</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Non-Approved</ListGroupItem>
            </ListGroup>
          </Collapse>
          <ListGroupItem action onClick={toggleNewJoinee} style={{ backgroundColor: '#495057', borderColor: '#495057' }}>
            New Joinee
          </ListGroupItem>
          <Collapse in={openNewJoinee}>
            <ListGroup>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>This Week</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Month</ListGroupItem>
            </ListGroup>
          </Collapse>
          <ListGroupItem action onClick={toggleOrientation} style={{ backgroundColor: '#495057', borderColor: '#495057',color:"white" }}>
            Orientation
          </ListGroupItem>
          <Collapse in={openOrientation}>
            <ListGroup>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}><Link to="Orientation" color="none" sx={{color:"white"}} underline="hover">
                {'Create'}
                </Link></ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Delete</ListGroupItem>
            </ListGroup>
          </Collapse>
          <ListGroupItem action onClick={toggleRequests} style={{ backgroundColor: '#495057', borderColor: '#495057' }}>
            Requests
          </ListGroupItem>
          <Collapse in={openRequests}>
            <ListGroup>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Email ID</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Access Cards</ListGroupItem>
            </ListGroup>
          </Collapse>
          <Typography variant='h4' sx={{ backgroundColor: "yellowgreen", padding: '0.5rem' }}>Off-Boarding</Typography>
          <ListGroupItem action onClick={toggleIncoming} style={{ backgroundColor: '#495057', borderColor: '#495057' }}>
            Incoming Request
          </ListGroupItem>
          <Collapse in={openIncoming}>
            <ListGroup>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Accepted</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Rejected</ListGroupItem>
            </ListGroup>
          </Collapse>
          <ListGroupItem action onClick={toggleNoC} style={{ backgroundColor: '#495057', borderColor: '#495057' }}>
            NoC
          </ListGroupItem>
          <Collapse in={openNoC}>
            <ListGroup>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Off-board Submission</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Employee De-activate</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Relieving Letter & NoC</ListGroupItem>
            </ListGroup>
          </Collapse>
        </ListGroup>
      </div>

      <div className="content flex-grow-1 p-3" style={{ marginTop: '60px' }}>
        <Container>
          <Row>
            <Col md={4}>
              <Card className="mb-3" style={{ backgroundColor: '#e9ecef' }}>
                <Card.Body>
                  <Card.Title>Total Employees</Card.Title>
                  <Card.Text className="text-center text-danger" style={{ fontSize: '2em' }}>
                    100
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3" style={{ backgroundColor: '#e9ecef' }}>
                <Card.Body>
                  <Card.Title>On-boarding</Card.Title>
                  <Card.Text className="text-center text-primary" style={{ fontSize: '2em' }}>
                    10
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-3" style={{ backgroundColor: '#e9ecef' }}>
                <Card.Body>
                  <Card.Title>Off-boarding</Card.Title>
                  <Card.Text className="text-center text-secondary" style={{ fontSize: '2em' }}>
                    3
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <HrDashboard />
  </div>
);

export default App;
