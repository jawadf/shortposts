import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '250517649387-j3s626b10jpcvp6ioc17drqn7ngm5ko1.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get()); 
        this.auth.isSignedIn.listen(this.onAuthChange); 
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId(), this.auth.currentUser.get().getBasicProfile().getName() );
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

 
  renderAuthButton() {
      if (this.props.isSignedIn === null) {
          return null;
      } else if (this.props.isSignedIn) {
          return (
              <button onClick={this.onSignOutClick} className="btn btn-signin">
                <i className="google icon" />
                Sign Out
              </button>
          );
      } else {
          return (
              <button onClick={this.onSignInClick} className="btn btn-purple btn-signin">
                <i className="google icon" /> Sign in to create post
              </button>
          );
      }
  }


  render() {
    return (
      <div>
          {this.renderAuthButton()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);