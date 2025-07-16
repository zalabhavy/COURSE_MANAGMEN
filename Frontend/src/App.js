import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/Home';
import Course from './components/Course';
import Allcourse from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Header from './components/Header';
import Menus from './components/Menus';
import About from './components/About';
import Contact from './components/Contact';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div>
      <Router>
        <ToastContainer />
        <Header />
        <Container className="mt-5">
          <Row>
            <Col md={4}>
              <Menus/>
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/view-courses" element={<Allcourse />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
