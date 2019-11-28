import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

import './PostList.scss'

 
class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderAdmin(post) {
    if(post.userId === this.props.userSignedIn ) {
      return (
      <div className="blog__admin">
        <Link to={`/posts/edit/${post.id}`} className="btn btn-small btn-admin"> <i className="edit icon" /> Edit</Link>
        <Link to={`/posts/delete/${post.id}`} className="btn btn-small btn-admin"><i className="trash alternate icon" /> Delete</Link>
      </div>
      ); 
    } 
  }

  renderCreate() {
    if(this.props.userIsSignedIn) {
      return <Link to="/posts/new"><button className="btn btn-purple btn-hero">Create post</button></Link>;
    } 
  }

  limitParagraphLength(parag, limit = 345) {
    let newParag = [];
    if(parag.length > limit) {
      parag.split(' ').reduce((acc, cur) => {
        if(acc + cur.length <= limit) {
          newParag.push(cur);
        }
        return acc + cur.length;
      }, 0);
      return `${newParag.join(' ')} ...`; 
    }
    return parag;
  }

  renderList() {
    return this.props.posts.slice(0).reverse().map(post => {
        return (
          <div className="blog">
            <div className="blog__bar">
              <Link to={`/posts/${post.id}`}><h4 className="blog__heading">{post.title}</h4></Link>
              {post.userName ? <span className="blog__username">by {post.userName}</span> : <span></span> }
              {this.renderAdmin(post)}
            </div>
            <p className="blog__paragraph">{this.limitParagraphLength(post.description)}</p>
          </div>
        );
    });
  }

  render() {
    let style = {
      backgroundImage: 'url("./hero.png")'
    };
    return (
      <div>
        
        <div className="hero" style={style}>
          <div className="row">
            <div className="hero__content">
              <h1 className="hero__heading">Writing blog posts has never been more straight forward</h1>
              <p className="hero__subheading">In just two clicks, create a blog post that you can modify or delete later. Read other people's blog posts in a single click. You need to sign in with Google in order to write a blog post.</p>
              <div className="hero__button">
               {this.renderCreate()}
              </div>
            </div>
          </div>
        </div>

        <div className="row list">
          <div className="list__heading">Previous Blog Posts</div>
            {this.renderList()}
        </div>
      </div>
      );
  }
}

const mapStateToProps = state => {
  return { 
    posts: Object.values(state.posts),
    userSignedIn: state.auth.userId,
    userIsSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);