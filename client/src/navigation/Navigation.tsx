import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import { UserContext } from '../context/authContext/AuthContext';
import HomePage from '../screens/home/HomePage';
import SignIn from '../screens/login/Login';
import Register from '../screens/register/Register';
import Settings from '../screens/settings/Settings';
import SingleBlogPage from '../screens/singleBlog/SingleBlogPage';
import WritePage from '../screens/write/WritePage';

const Navigation: React.FC = () => {
  const { user } = useContext<any>(UserContext);
  const currentUser = user;
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/post/:postId">
          <SingleBlogPage />
        </Route>
        <Route path="/register">
          {currentUser ? <HomePage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <HomePage /> : <SignIn />}</Route>
        <Route path="/write">{currentUser ? <WritePage /> : <SignIn />} </Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <SignIn />}
        </Route>
      </Switch>
    </>
  );
};

export default Navigation;
