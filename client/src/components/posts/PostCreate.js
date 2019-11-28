import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../../actions';
import PostForm from './PostForm';

import './PostCreate.scss';

class PostCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createPost(formValues);
  }

  render() {
    return (
      <div className="row create-form">
        <h4>Create a blog post</h4>
        <PostForm onSubmit={this.onSubmit} />
      </div>
    );

  }
}

export default connect(null, {createPost})(PostCreate);


























/* import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';


class StreamCreate extends React.Component {

  renderError({error, touched}) {
    if(touched && error) {
      return (
        <div className="ui error message">
           <div className="header">{error}</div> 
        </div>
      );
    }
  }

  renderInput = ({input, label, meta}) => {
    const className=`field ${meta.touched && meta.error ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)} >
        <Field name="title" component={this.renderInput} label="Title" />
        <Field name="description" component={this.renderInput} label="Description" />
        <button className="ui button primary">Submit</button>
      </form>
      );
  }
}

const validate = formValues => {
  const errors = {};
  if(!formValues.title) {
    errors.title = 'Must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'Must enter a description';
  }
    return errors;
}

const connectedComponent = connect(null, { createStream })(StreamCreate);

export default reduxForm({
  form: 'StreamCreate',
  validate
})(connectedComponent); */