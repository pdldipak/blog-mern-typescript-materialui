import React from 'react';
import { Box } from '@material-ui/core';
import TopBar from './components/navbar/TopBar';
import { Header } from './Styled.App';
import Home from './screens/home/Home';

const App: React.FC = () => {
  return (
    <Box>
      <Header>
        <TopBar />
      </Header>
      <main>
        <Home />
      </main>
    </Box>
  );
};

export default App;
