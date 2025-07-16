import React from "react";
import { Container, Card, CardBody } from "reactstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center mt-5"
    >
      <Card
        className="text-center bg-white p-5 rounded shadow-sm"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <CardBody>
          <h1 className="text-primary fw-bold mb-3">Get in Touch</h1>
          <p className="lead text-secondary mb-4">
            You can connect with me for collaborations, queries, or just to say hello!
          </p>

          <div className="d-flex justify-content-center gap-4 mt-3">
            <a
              href="https://github.com/zalabhavy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark fs-3"
              title="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/bhavy-zala-59bb76241/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary fs-3"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>

          <p className="mt-4 text-muted mb-0">
            Connect with me via <strong>GitHub</strong> or <strong>LinkedIn</strong> to stay updated and collaborate.
          </p>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Contact;
