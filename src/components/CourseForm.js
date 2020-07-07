import React from 'react';
import TextInput from './common/TextInput';
import PropTypes from 'prop-types';

const CourseForm = (props) => {
  return(
  <form onSubmit={props.onSubmit}>
        <TextInput
          id="title"        
          name="title"
          label="Title"
          value={props.course.title}
          onChange={props.onChange}
          error={props.errors.title}
        />

      <div className="form-group">
          <label htmlFor="author">Author</label>
          <div className="field">
              <select
                id="author"
                name="authorId"
                onChange={props.onChange}
                className="form-control"
                value={props.course.authorId || ""}
              >
                  <option value="" />
                  <option value="1">Gary Sulphate</option>
                  <option value="64">Mariam Stone</option>        

                </select>

          </div>
          {props.errors.authorId && (
            <div className="alert alert-danger">
              {props.errors.authorId}
            </div>
          )}
          
      </div>

              {/* <TextInput
                id="author"
                name="authorId"
                label="Author"
                // value={props.course.authorId || ""}
                value="Aukoda"
                onChange={props.onChange}
              />  */}
        <TextInput
          id="category"
          name="category"
          label="Category"
          value={props.course.category}
          onChange={props.onChange}
          error={props.errors.category}
        />

      <input 
        type="submit" 
        value="Save" 
        className="btn btn-primary"
      />
      
  </form>
)
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

export default CourseForm;