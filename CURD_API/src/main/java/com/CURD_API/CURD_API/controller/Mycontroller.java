package com.CURD_API.CURD_API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.CURD_API.CURD_API.entities.Courses;
import com.CURD_API.CURD_API.services.CourseService;

@RestController
public class Mycontroller 
{
    @Autowired
    private CourseService courseService;
    
    @GetMapping("/home")
    public String home() {
        return "This is Home";
    }
    
    @GetMapping("/courses")
    public List<Courses> getCourses() {
        return this.courseService.getCourses();
    }
    
    @GetMapping("/courses/{courseId}")
    public Courses getCourse(@PathVariable String courseId) {
        return this.courseService.getCourse(Long.parseLong(courseId));
    }
    
    @PostMapping("/courses")
    public Courses addCourse(@RequestBody Courses course) {
        return this.courseService.addCourse(course);
    }
    
    @PutMapping("/courses")
    public Courses updateCourse(@RequestBody Courses course) {
        return this.courseService.updateCourse(course);
    }
    
    @DeleteMapping("/courses/{courseId}")
    public void deleteCourse(@PathVariable String courseId) {
        this.courseService.deleteCourse(Long.parseLong(courseId));
    }
}
