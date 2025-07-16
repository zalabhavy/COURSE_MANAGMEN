import React from "react";
import { Container, Card, CardBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center mt-5"
    >
      <Card
        className="text-center bg-white p-5 rounded shadow-sm"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <CardBody>
          <h1 className="text-primary fw-bold mb-3"> About This App</h1>
          <p className="lead text-secondary">
            This Course Management Application is designed to help you organize,
            manage, and track your courses efficiently.
          </p>
          <p className="text-muted mb-0">
            <strong>Built with:</strong> Spring Boot (Backend) & React (Frontend)
          </p>
        </CardBody>
      </Card>
    </Container>
  );
};

export default About;
