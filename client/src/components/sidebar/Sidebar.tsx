import React from 'react';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Stack from '@material-ui/core/Stack';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

const Sidebar: React.FC = () => {
  return (
    <Box component="div" sx={{ margin: 0 }}>
      <Typography variant="h6" align="center" gutterBottom>
        <hr />
        ABOUT ME
        <hr />
      </Typography>
      <img
        src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
        alt=""
        style={{ width: '100%' }}
      />
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
        {['Life', 'Education', 'Professional', 'Travelling', 'Playing'].map(
          item => (
            <Link
              display="block"
              variant="body1"
              href="#"
              key={item}
              sx={{
                display: 'inline-block',
                marginTop: '15px',
                cursor: 'pointer',
              }}
            >
              {item}
            </Link>
          ),
        )}
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
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Box>
  );
};

export default Sidebar;

// .sidebarList {
//   list-style-type: none;
//   margin-bottom: 30px;
// }

// .sidebarListItem {
//   display: inline-block;
//   width: 50%;
//   margin-top: 15px;
//   cursor: pointer;

// display: flex;
// flex-direction: column;
// align-items: center;
