package com.CURD_API.CURD_API.services;

import java.util.List;

import com.CURD_API.CURD_API.entities.Courses;

public interface CourseService 
{
  public List<Courses>getCourses();

    public Courses getCourse(long courseId);
    
    public Courses addCourse(Courses course);
    
    public Courses updateCourse(Courses course);
    
    public void deleteCourse(long courseId);
  
}
