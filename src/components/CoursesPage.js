import React, { useState, useEffect} from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';

const CoursesPage = () => {
    const [courses, setCourses] = useState({ data: [] });

    useEffect(() => {
        getCourses()
            .then(fetchedCourses => setCourses({ data: fetchedCourses }))
                   
    }, []);

    
    // const showError = () => {
    //     console.log(courses);
    // };

    
        return (
            <>
                <h2>All Courses</h2>
                <CourseList courses={courses} />
            </>
            
        );
   
}

export default CoursesPage;