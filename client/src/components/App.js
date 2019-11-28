import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostCreate from './posts/PostCreate';
import PostList from './posts/PostList';
import PostShow from './posts/PostShow';
import PostEdit from './posts/PostEdit';
import PostDelete from './posts/PostDelete';
import Header from './Header';
import Footer from './Footer';
import history from '../history';

const App = () => {
  return (
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={PostList} />
            <Route path="/posts/new" component={PostCreate} />
            <Route path="/posts/edit/:id" component={PostEdit} />
            <Route path="/posts/delete/:id" component={PostDelete} />
            <Route path="/posts/:id" component={PostShow} />
          </Switch>
          <Footer />
        </Router>
  );
};

export default App;