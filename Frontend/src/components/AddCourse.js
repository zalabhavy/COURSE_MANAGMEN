import React, { Fragment, useState } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Container,
  Card,
  CardBody,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../API/bootapi";

const AddCourse = () => {
  const [course, setCourses] = useState({
    id: "",
    title: "",
    decription: "",
  });

  // POST data to backend
  const postDatatoServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("Course added successfully!", {
          position: "bottom-center",
        });
        setCourses({ id: "", title: "", decription: "" });
      },
      (error) => {
        console.error(error);
        toast.error("Something went wrong", { position: "bottom-center" });
      }
    );
  };

  // Form submission handler
  const handleForm = (e) => {
    e.preventDefault();
    console.log(course);
    postDatatoServer(course);
  };

  // Clear form handler
  const clearForm = () => {
    setCourses({ id: "", title: "", decription: "" });
  };

  return (
    <Fragment>
      <Container
        className="d-flex justify-content-center align-items-center mt-5"
      >
        <Card
          className="shadow-sm border-1 p-4"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <CardBody>
            <h2 className="text-center text-primary mb-4">Add New Course</h2>

            <Form onSubmit={handleForm}>
              <FormGroup>
                <Label for="userId" className="fw-bold">
                  Course ID
                </Label>
                <Input
                  type="text"
                  placeholder="Enter Course ID"
                  name="userId"
                  id="userId"
                  className="rounded"
                  value={course.id}
                  onChange={(e) =>
                    setCourses({ ...course, id: e.target.value })
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label for="title" className="fw-bold">
                  Course Title
                </Label>
                <Input
                  type="text"
                  placeholder="Enter Course Title"
                  name="title"
                  id="title"
                  className="rounded"
                  value={course.title}
                  onChange={(e) =>
                    setCourses({ ...course, title: e.target.value })
                  }
                />
              </FormGroup>

              <FormGroup>
                <Label for="decription" className="fw-bold">
                  Description
                </Label>
                <Input
                  type="textarea"
                  placeholder="Enter Course Description"
                  name="description"
                  id="description"
                  className="rounded"
                  rows={4}
                  value={course.decription}
                  onChange={(e) =>
                    setCourses({ ...course, decription: e.target.value })
                  }
                />
              </FormGroup>

              <div className="text-center mt-4">
                <Button
                  color="success"
                  className="me-3 px-4 rounded-pill"
                  type="submit"
                >
                  Add Course
                </Button>
                <Button
                  color="danger"
                  className="px-4 rounded-pill"
                  type="button"
                  onClick={clearForm}
                >
                  Clear
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default AddCourse;
