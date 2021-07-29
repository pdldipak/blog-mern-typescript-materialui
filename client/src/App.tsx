import React from 'react';
import { Container, Paper } from '@material-ui/core';
import TopBar from './components/navbar/TopBar';
import { Header } from './Styled.App';
import WritePage from './screens/write/WritePage';
// import SingleBlogPage from './screens/singleBlog/SingleBlogPage';
// import HomePage from './screens/home/HomePage';

const App: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Header elevation={0}>
        <TopBar />
      </Header>

      <main>
        <Paper elevation={0}>
          {/* <HomePage /> */}
          {/* <SingleBlogPage /> */}
          <WritePage />
        </Paper>
      </main>
    </Container>
  );
};

export default App;
