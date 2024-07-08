package com.CURD_API.CURD_API.Dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.CURD_API.CURD_API.entities.Courses;

public interface CourseDao extends JpaRepository<Courses,Long>
{

}
