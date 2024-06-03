import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  Nav,
  Container,
  ListGroup,
  ListGroupItem,
  Collapse,
  Button,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import { Typography } from '@mui/material';

const EmpDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [openTrainings, setOpenTrainings] = useState(false);
  const [openForms, setOpenForms] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);

  const toggleTrainings = () => setOpenTrainings(!openTrainings);
  const toggleForms = () => setOpenForms(!openForms);
  const toggleStatus = () => setOpenStatus(!openStatus);

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
            <span className="ms-2 text-light">Emp Profile</span>
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
          <ListGroupItem action style={{ backgroundColor: '#495057', borderColor: '#495057' }}>
            <Link to="#" className="text-light text-decoration-none">
              Home
            </Link>
          </ListGroupItem>
          {/* <Typography variant='h5' sx={{ backgroundColor: "yellow", padding: '0.5rem' }}>Trainings</Typography>
          <ListGroupItem action onClick={toggleTrainings} style={{ backgroundColor: '#495057', borderColor: '#495057' }}>
            Skill
          </ListGroupItem>
          <Collapse in={openTrainings}>
            <ListGroup>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Course</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Topic</ListGroupItem>
            </ListGroup>
          </Collapse> */}
          <Typography variant='h5' sx={{ backgroundColor: "yellow", padding: '0.5rem' }}>Forms</Typography>
          <ListGroupItem action onClick={toggleForms} style={{ backgroundColor: '#495057', borderColor: '#495057' }}>
            Requests
          </ListGroupItem>
          <Collapse in={openForms}>
            <ListGroup>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Leave</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Resignation</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Training</ListGroupItem>
            </ListGroup>
          </Collapse>
          <Typography variant='h5' sx={{ backgroundColor: "yellow", padding: '0.5rem' }}>Status</Typography>
          <ListGroupItem action onClick={toggleStatus} style={{ backgroundColor: '#495057', borderColor: '#495057' }}>
            Requests
          </ListGroupItem>
          <Collapse in={openStatus}>
            <ListGroup>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Leave</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Resignation</ListGroupItem>
              <ListGroupItem action style={{ backgroundColor: '#6c757d', borderColor: '#6c757d' }}>Training</ListGroupItem>
            </ListGroup>
          </Collapse>
        </ListGroup>
      </div>

      <div className="content flex-grow-1 p-3" style={{ marginTop: '60px' }}>
        {/* <Container>
          <Row>
            <Col md={4}>
              <Card className="mb-3" style={{ backgroundColor: '#e9ecef' }}>
                <Card.Body>
                  <Card.Title>Dashboard</Card.Title>
                  <Card.Text className="text-center" style={{ fontSize: '2em' }}>
                    Welcome to Employee Dashboard
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container> */}
      </div>
    </div>
  );
};

const App = () => (
  <div>
    <EmpDashboard />
  </div>
);

export default App;
