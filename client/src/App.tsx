import React from 'react';
import { Container } from '@material-ui/core';
import TopBar from './components/navbar/TopBar';
import { Header } from './Styled.App';
import SingleBlog from './screens/singleBlog/SingleBlog';
// import Home from './screens/home/Home';

const App: React.FC = () => {
  return (
    <Container maxWidth="xl">
      <Header elevation={0}>
        <TopBar />
      </Header>

      <main>
        {/* <Home /> */}
        <SingleBlog />
      </main>
    </Container>
  );
};

export default App;
