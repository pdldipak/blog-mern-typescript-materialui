import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import TopBar from './components/navbar/TopBar';
import { Header, MainContainer } from './Styled.App';
import Navigation from './navigation/Navigation';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MainContainer>
        <Header elevation={0}>
          <TopBar />
        </Header>

        <main>
          <Paper elevation={0}>
            <Navigation />
          </Paper>
        </main>
      </MainContainer>
    </BrowserRouter>
  );
};

export default App;
