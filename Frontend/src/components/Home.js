import React from "react";
import { Button, Container } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/view-courses");
  };

  return (
    <Container
      className="text-center bg-white p-5 rounded shadow-sm mt-3 mt-md-5"
      style={{
        maxWidth: "600px",
        border: "1px solid #dee2e6",
        width: "100%",
      }}
    >
      <h1 className="display-6 mb-3 text-primary">
        Made By{" "}
        <a
          href="https://www.linkedin.com/in/bhavy-zala-59bb76241/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-secondary"
        >
          Bhavy_Zala
        </a>
      </h1>

      <p className="lead text-secondary">
        This is a course management project designed to help you learn efficiently and effectively.
      </p>

      <Button
        color="primary"
        size="md"
        className="mt-4 px-4 rounded-pill"
        onClick={handleStart}
      >
        Start Learning
      </Button>
    </Container>
  );
};

export default Home;
