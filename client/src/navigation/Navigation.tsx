import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../screens/home/HomePage';
import SignIn from '../screens/login/Login';
import Register from '../screens/register/Register';
import Settings from '../screens/settings/Settings';
import SingleBlogPage from '../screens/singleBlog/SingleBlogPage';
import WritePage from '../screens/write/WritePage';

const Navigation: React.FC = () => {
  const currentUser = true;
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/posts">
          <SingleBlogPage />
        </Route>
        <Route path="/register">
          {!currentUser ? <HomePage /> : <Register />}
        </Route>
        <Route path="/login">{!currentUser ? <HomePage /> : <SignIn />}</Route>
        <Route path="/write">
          {currentUser ? <WritePage /> : <SignIn />}{' '}
        </Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <SignIn />}
        </Route>
      </Switch>
    </>
  );
};

export default Navigation;


// //import Settings from './screens/settings/Settings';
// //import SignIn from './screens/login/Login';
// import Register from './screens/register/Register';

// // import WritePage from './screens/write/WritePage';
// // import SingleBlogPage from './screens/singleBlog/SingleBlogPage';
// // import HomePage from './screens/home/HomePage';

{
  /* <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch> */
}
