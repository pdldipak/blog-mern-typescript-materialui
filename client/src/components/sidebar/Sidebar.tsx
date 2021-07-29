import React from 'react';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Stack from '@material-ui/core/Stack';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Image } from '../../utility/utilityStyled';

const Sidebar: React.FC = () => {
  return (
    <Paper elevation={0} sx={{ marginTop: '62px' }}>
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
    </Paper>
  );
};

export default Sidebar;
