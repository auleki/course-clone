import React, { useState, useEffect} from 'react';
import { getCourses } from "../api/courseApi";
import CourseList from './CourseList';
import { Link } from 'react-router-dom';

const CoursesPage = () => {
    const [courses, setCourses] = useState({ data: [] });

    useEffect(() => {
        getCourses()
            .then(fetchedCourses => setCourses({ data: fetchedCourses }))
                   
    }, []);

    
        return (
            <>
                <h2>All Courses</h2>
                <Link className="btn btn-primary" to="/course">
                    Add Course
                </Link>
                <CourseList courses={courses} />
            </>
            
        );
   
}

export default CoursesPage;