import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../../Modal';
import history from '../../history';
import { fetchPost, deletePost } from '../../actions';

class PostDelete extends React.Component {
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  } 

  actualDelete = () => {
    this.props.deletePost(this.props.match.params.id);
  } 

  renderButtons() {
    return (
      <React.Fragment>
        <Link to='/' className="ui button" style={{fontSize: 'inherit'}}>Cancel</Link>
        <button onClick={this.actualDelete} className="ui button red" style={{fontSize: 'inherit'}}>Delete</button>
      </React.Fragment>
    );
  }

  renderContent() {
    if(!this.props.selectedPost) {
      return <div>Are you sure you want to delete it?</div>;
    }

    return <div>{`Are you sure you want to delete '${this.props.selectedPost.title}'?`}</div>;
  }

  render() {
    return <Modal 
          title="Delete Post"
          content={this.renderContent()}
          actions={this.renderButtons()}
          onDismiss={() => history.push('/')}
        />;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { selectedPost: state.posts[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {fetchPost, deletePost})(PostDelete);

