package com.CURD_API.CURD_API.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Courses 
{
	public Courses() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	private long id;
    private String title;
    private String decription;
     public Courses(long id, String title, String decription) {
		super();
		this.id = id;
		this.title = title;
		this.decription = decription;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDecription() {
		return decription;
	}
	public void setDecription(String decription) {
		this.decription = decription;
	}
	@Override
	public String toString() {
		return "Courses [id=" + id + ", title=" + title + ", decription=" + decription + ", getId()=" + getId()
				+ ", getTitle()=" + getTitle() + ", getDecription()=" + getDecription() + ", getClass()=" + getClass()
				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
     
	
     
}
