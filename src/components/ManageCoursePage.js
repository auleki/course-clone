import React, { useState }  from 'react';
// import { Prompt } from 'react-router-dom';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';



const ManageCoursePage = (props) => {

  const [course, setCourse] = useState({
    id: null,
    slug: "", 
    title: "", 
    authorId: null, 
    category: ""
  })

  // const slug = props.match.params.slug;
  // const handleChange = () => {
  //   console.log('ok..things are happening');
  // }

  const handleChange = ({target}) => {
    // we use JS computed property for the dynamic variable name
    setCourse({
      ...course, 
      [target.name]: target.value
    });

  }

  const handleSubmit = (event) => {
    event.preventDefault();
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
    });

  }

  return(
    <>
        <CourseForm 
          course={course} 
          onChange={handleChange}
          onSubmit={handleSubmit}
           />
        

    </>
)
}

export default ManageCoursePage;