import React from 'react';
import Paper from '@material-ui/core/Paper';
import TopBar from './components/header/TopBar';
import Extra from './extra/Extra';

const App: React.FC = () => {
  return (
    <Paper
      sx={{
        width: '100%',
        height: '100vh',
        bgcolor: 'background.default',
        color: 'text.primary',
      }}
    >
      <TopBar />
      <div>
        <Extra />
      </div>
    </Paper>
  );
};

export default App;
