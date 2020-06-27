import React from 'react';
import PropTypes from 'prop-types';


const CourseList = props => {
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
                <td>{course.title}</td>
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