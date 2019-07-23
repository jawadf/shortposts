import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { editPost, fetchPost } from '../../actions';
import PostForm from './PostForm';

import './PostEdit.scss';


class PostEdit extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editPost(this.props.match.params.id, formValues);
  }

  render() {
    if(!this.props.selectedPost) {
      return <div>Loading...</div>;
    }


    return (
      <div className="row edit-form">
        <h4>Edit your blog post</h4>
        <PostForm  initialValues={_.pick(this.props.selectedPost, 'title', 'description')} onSubmit={this.onSubmit} />
      </div>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    selectedPost: state.posts[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, { editPost, fetchPost })(PostEdit);