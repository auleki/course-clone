import React from 'react';
import { Prompt } from 'react-router-dom';


const ManageCoursePage = (props) => {
  return(
    <>
        <Prompt 
        when={true}
        message="Are you sure you want to leave?"
        />
        <h2>Manage Course</h2>
        { props.match.params.slug }
        

    </>
)
}

export default ManageCoursePage;