import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../API/bootapi";
import Course from "./Course";

const Allcourse = () => {
  const [courses, setCourses] = useState([]);

  // Flag to prevent double load in React.StrictMode
  const loadCourses = (() => {
    let loaded = false;

    return () => {
      if (loaded) return;
      loaded = true;

      axios
        .get(`${base_url}/courses`)
        .then(({ data }) => {
          setCourses(data);
          toast.success("Courses Loaded", { position: "bottom-center" });
        })
        .catch(() =>
          toast.error("Could not load courses", { position: "bottom-center" })
        );
    };
  })();

  // DELETE – remove from UI
  const removeCourseById = (id) =>
    setCourses((prev) => prev.filter((c) => String(c.id) !== String(id)));

  // PUT – replace course in UI
  const updateCourseInList = (updated) =>
    setCourses((prev) =>
      prev.map((c) => (String(c.id) === String(updated.id) ? updated : c))
    );

  useEffect(loadCourses, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary mb-3">All Courses</h1>

      {courses.length ? (
        courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            removeCourse={removeCourseById}
            updateCourse={updateCourseInList}
            className="item-center"
          />
        ))
      ) : (
        <h4 className="text-danger text-center">No courses available</h4>
      )}
    </div>
  );
};

export default Allcourse;
