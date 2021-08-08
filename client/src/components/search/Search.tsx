import React, { useState, useContext } from 'react';
import { styled, alpha } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { CategoryContext } from '../../context/categoriesContext/CategoriesContext';

type nameType = {
  name: string;
  _id: string;
};
type Props = {
  categories: nameType[];
};

const SearchAppBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { categories } = useContext<Props>(CategoryContext);

  const matchCategories = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    categories.filter(category => {
      if (searchTerm == '') {
        window.location.replace('/');
      } else if (
        category.name.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        window.location.replace(`/?category=${category.name}`);
      }
    });
    setSearchTerm('');
  };
  return (
    <Search onSubmit={matchCategories}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }}
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
    </Search>
  );
};

export default SearchAppBar;

const Search = styled('form')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.2),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
