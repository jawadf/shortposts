import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './PostForm.scss';


class PostForm extends React.Component { 

  renderError({error, touched}) {
    if(touched && error) {
      return (
        <div className="ui error message">
           <div className="header">{error}</div> 
        </div>
      );
    }
  }

  renderInput = ({input, label, meta, type}) => {
    const className=`form field ${meta.touched && meta.error ? 'error' : ''}`;
    const renderField = (label) => {
      if(label === "Title") {
        return <input {...input} autoComplete="off"  className={label} placeholder />;
      } else {
        return  <textarea {...input} autoComplete="off"  className={label} placeholder />;
      }
    };

    return (
      <div className={className}>
        <label>{label}</label>
        {renderField(label)}
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <Field name="title" component={this.renderInput} label="Title"  />
        <Field name="description" component={this.renderInput} label="Description" />
        <button className="btn btn-purple btn-submit submit-button">Submit</button>
      </form>
      ); 
  }
}

const validate = formValues => {
  const errors = {};
  if(!formValues.title) {
    errors.title = 'Must enter a title';
  } else if (formValues.title.length >= 20) {
    errors.title = 'Title should be less than 20 characters';
  }


  if (!formValues.description) {
    errors.description = 'Must enter a description';
  }
    return errors;
}

//const connectedComponent = connect(null, { createPost })(PostCreate);

export default reduxForm({
  form: 'PostForm',
  validate
})(PostForm);