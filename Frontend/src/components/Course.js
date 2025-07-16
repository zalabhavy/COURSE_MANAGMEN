import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../API/bootapi";

const Course = ({ course, removeCourse, updateCourse }) => {
  const [editOpen, setEditOpen] = useState(false);
  const [form, setForm] = useState({ ...course });

  /* ---------- DELETE ---------- */
  const deleteCourse = () => {
    axios.delete(`${base_url}/courses/${course.id}`).then(
      () => {
        toast.success("Deleted", { position: "bottom-center" });
        removeCourse(course.id);
      },
      () => toast.error("Delete failed", { position: "bottom-center" })
    );
  };

  /* ---------- UPDATE ---------- */
  const saveUpdate = (e) => {
    e.preventDefault();
    axios.put(`${base_url}/courses`, form).then(
      ({ data }) => {
        toast.success("Updated", { position: "bottom-center" });
        updateCourse(data);     
        setEditOpen(false);
      },
      () => toast.error("Update failed", { position: "bottom-center" })
    );
  };

  return (
    <>
      <Card className="mb-3 shadow-sm border-1">
        <CardBody className="text-center">
          <CardTitle tag="h5" className="text-primary">
            {course.title}
          </CardTitle>
          <CardText className="text-muted">
            {course.decription ?? course.decription}
          </CardText>

          <Container className="text-center mt-3">
            <Button
              color="danger"
              className="me-2 px-4 rounded-pill"
              onClick={deleteCourse}
            >
              Delete
            </Button>
            <Button
              color="success"
              className="px-4 rounded-pill"
              onClick={() => setEditOpen(true)}
            >
              Update
            </Button>
          </Container>
        </CardBody>
      </Card>

      {/* --- Edit Modal --- */}
      <Modal isOpen={editOpen} toggle={() => setEditOpen(!editOpen)}>
        <ModalHeader toggle={() => setEditOpen(false)}>
          Edit Course
        </ModalHeader>
        <Form onSubmit={saveUpdate}>
          <ModalBody>
            <FormGroup>
              <Label>Course ID</Label>
              <Input
                type="text"
                value={form.id}
                readOnly              
              />
            </FormGroup>

            <FormGroup>
              <Label>Title</Label>
              <Input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>Description</Label>
              <Input
                type="textarea"
                rows={4}
                value={form.decription ?? form.decription}
                onChange={(e) =>
                  setForm({ ...form, decription: e.target.value })
                }
                required
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" type="submit">
              Save
            </Button>
            <Button color="secondary" onClick={() => setEditOpen(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </>
  );
};

export default Course;
