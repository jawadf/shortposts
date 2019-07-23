import React from 'react';
import { connect } from 'react-redux';
import  { Link } from 'react-router-dom';
import { fetchPost } from '../../actions';

import './PostShow.scss'

class PostShow extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  renderDetails(post) {
    return (
      <div>
        <div className="show-bar">
          <h3>{post.title}</h3>
          {post.userName ? <span className="show-username">by {post.userName}</span> : ''}
          {this.renderAdmin(post)}
        </div>
        <div className="show-paragraph">{post.description}</div>
      </div>
    );
  }

  renderAdmin(post) {
    if(post.userId === this.props.auth.userId) {
      return (
        <div className="show-admin">
          <Link to={`/posts/edit/${post.id}`} className="btn btn-small btn-admin"> <i className="edit icon" /> Edit</Link>
          <Link to={`/posts/delete/${post.id}`} className="btn btn-small btn-admin"><i className="trash alternate icon" /> Delete</Link>
        </div>
        ); 
    }
  }

  render() {
    if(!this.props.selectedPost) {
      return <div>Loading...</div>;
    }

    return (
      <div className="show-blog">
        <div className="row">
          {this.renderDetails(this.props.selectedPost)}
          
        </div>
      </div> 
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { 
    selectedPost: state.posts[ownProps.match.params.id],
    auth: state.auth
   };
};

export default connect(mapStateToProps, { fetchPost })(PostShow);