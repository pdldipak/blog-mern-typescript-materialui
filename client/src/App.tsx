import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import TopBar from './components/navbar/TopBar';
import { Header, MainContainer } from './Styled.App';
import Navigation from './navigation/Navigation';
import { BlogsContextProvider } from './context/blogsContext/BlogContext';
import { CategoryContextProvider } from './context/categoriesContext/CategoriesContext';
import { UserContextProvider } from './context/authContext/AuthContext';
import Footer from './components/footer/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <BlogsContextProvider>
          <CategoryContextProvider>
            <MainContainer>
              <Header elevation={0}>
                <TopBar />
              </Header>

              <main>
                <Paper elevation={0}>
                  <Navigation />
                </Paper>
              </main>
              <footer>
                <Paper elevation={0}>
                  <Footer />
                </Paper>
              </footer>
            </MainContainer>
          </CategoryContextProvider>
        </BlogsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
};

export default App;
