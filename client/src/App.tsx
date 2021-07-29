import React from 'react';
import {Paper } from '@material-ui/core';
import TopBar from './components/navbar/TopBar';
import { Header, MainContainer } from './Styled.App';
//import Settings from './screens/settings/Settings';
//import SignIn from './screens/login/Login';
import Register from './screens/register/Register';
// import WritePage from './screens/write/WritePage';
// import SingleBlogPage from './screens/singleBlog/SingleBlogPage';
// import HomePage from './screens/home/HomePage';

const App: React.FC = () => {
  return (
    <MainContainer>
      <Header elevation={0}>
        <TopBar />
      </Header>

      <main>
        <Paper elevation={0}>
          {/* <HomePage /> */}
          {/* <SingleBlogPage /> */}
          {/* <WritePage /> */}
          {/* <Settings /> */}
          {/* <SignIn /> */}
          <Register />
        </Paper>
      </main>
    </MainContainer>
  );
};

export default App;
