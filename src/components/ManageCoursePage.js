import React, { useState, useEffect }  from 'react';
// import { Prompt } from 'react-router-dom';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
import { toast } from 'react-toastify';


const ManageCoursePage = (props) => {
  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "", 
    title: "", 
    authorId: null, 
    category: ""
  })


  useEffect(() => {
    const slug = props.match.params.slug;
    if(slug) {
      courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
    }

  }, [props.match.params.slug]);

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

  
  const formIsValid = () => {
    const _errors = {};
    
    if (!course.title) _errors.title = "Hi there, you need a Title"
    if (!course.authorId) _errors.authorId = "Hi there, you need an Author"
    if (!course.category) _errors.category = "Hi there, you need a Category"
    
    setErrors({_errors});

    return Object.keys(_errors).length === 0;
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if(!formIsValid()) return; 
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course Saved");
    });

  }


  return(
    <>
        <CourseForm 
          course={course} 
          errors={errors}
          onChange={handleChange}
          onSubmit={handleSubmit}
           />
        

    </>
)
}

export default ManageCoursePage;