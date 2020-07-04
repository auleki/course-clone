import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CourseList = props => {
    // debugger;
    // console.log(JSON.stringify(props));
    // console.log(props.length);
  return(
    <table className="table">
    <thead>
        <tr> 
            <th>Title</th>
            <th>Author Id</th>
            <th>Category</th>                                                
        </tr>
    </thead>
    <tbody>
        {props.courses.data.map(course => {
            return (
            <tr key={course.id}>
                <td>
                    <Link to={`/course/${course.slug}`}>{course.title}</Link> 
                </td>
                <td>{course.authorId}</td>
                <td>{course.category}</td>
            </tr>
            );
        })}                    
        
    </tbody>
   
</table>  
    );
}

CourseList.propTypes = {
    courses: PropTypes.array.isRequired
}

CourseList.defaultProps = {
    courses: []
}

export default CourseList;