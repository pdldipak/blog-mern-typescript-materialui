import * as React from 'react';
import Stack from '@material-ui/core/Stack';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const SocialMediaIcons: React.FC = () => {
  return (
    <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
      <IconButton>
        <Badge>
          <FacebookIcon />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge>
          <LinkedInIcon />
        </Badge>
      </IconButton>
      <IconButton>
        <Badge>
          <TwitterIcon />
        </Badge>
      </IconButton>
    </Stack>
  );
};

export default SocialMediaIcons;
