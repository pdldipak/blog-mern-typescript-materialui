import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Stack from '@material-ui/core/Stack';
import { Link as Link1 } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Image } from '../../utility/utilityStyled';
import { CategoryContext } from '../../context/categoriesContext/CategoriesContext';

type nameType = {
  name: string;
  _id: string;
};

type Props = {
  categories: nameType[];
};

const Sidebar: React.FC = () => {
  const { categories } = useContext<Props>(CategoryContext);
  console.log('categories', categories);
  return (
    <Paper
      elevation={0}
      sx={{ top: '150px', marginTop: '62px', position: 'sticky' }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        <hr />
        ABOUT ME
        <hr />
      </Typography>
      <Image src="/resume_pic.jpg" alt="" />
      <Typography>
        Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet
        ex esse.Sunt eu ut nostrud id quis proident.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3 }}>
        <hr />
        Categories
        <hr />
      </Typography>
      <Stack>
        {categories?.map(category => (
          <Typography
            display="block"
            variant="body1"
            key={category._id}
            sx={{
              display: 'inline-block',
              marginTop: '15px',
              cursor: 'pointer',
            }}
          >
            <Link to={`/?category=${category.name}`}> {category.name}</Link>
          </Typography>
        ))}
      </Stack>
      <Typography variant="h6" sx={{ mt: 3 }}>
        <hr />
        Social
        <hr />
      </Typography>

      {[
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon },
      ].map(network => (
        <Link1
          display="block"
          variant="body1"
          underline="none"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link1>
      ))}
    </Paper>
  );
};

export default Sidebar;
