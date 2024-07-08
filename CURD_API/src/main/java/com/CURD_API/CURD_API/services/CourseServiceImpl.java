package com.CURD_API.CURD_API.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.CURD_API.CURD_API.Dao.CourseDao;
import com.CURD_API.CURD_API.entities.Courses;

@Service
public class CourseServiceImpl implements CourseService {
    
    @Autowired
    private CourseDao courseDao;

    public CourseServiceImpl() {
        // Default constructor
    }
    
    @Override
    public List<Courses> getCourses() {
        return courseDao.findAll();  
    }

    @Override
    public Courses getCourse(long courseId) {
        return courseDao.findById(courseId).orElse(null);
    }

    @Override
    public Courses addCourse(Courses course) {
        return courseDao.save(course);
    }

    @Override
    public Courses updateCourse(Courses course) {
        return courseDao.save(course);
    }

    @Override
    public void deleteCourse(long courseId) {
        courseDao.deleteById(courseId);
    }
}
