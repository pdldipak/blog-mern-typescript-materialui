import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import { styled } from '@material-ui/core/styles';
import { postTypes } from '../../types/type';
import { Image } from '../../utility/utilityStyled';

type Props = {
  post: postTypes;
};

const Post: React.FC<Props> = ({ post }) => {
  return (
    <Paper sx={{ marginTop: '62px', borderRadius: '5px', marginRight: '20px' }}>
      <Box sx={{ height: '400px' }}>
        <Image className="postImg" src={post.image} alt="" />
      </Box>
      <Grid container p={2}>
        <Grid item>
          <Box mb={2}>
            <span>
              <Link variant="subtitle1" underline="none" href="#">
                {post.linkText[0]}
              </Link>
            </span>
            <span>
              <Link variant="subtitle1" underline="none" href="#">
                {post.linkText[1]}
              </Link>
            </span>
          </Box>
          <Box>
            <Link href="#" color="inherit" underline="none">
              <Typography variant="h4" gutterBottom>
                {post.title}
              </Typography>
            </Link>

            <Typography variant="subtitle2" color="text.secondary">
              1 hour ago
            </Typography>
            <Paragraph>{post.description}</Paragraph>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Post;

const ParagraphText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  marginTop: '16px',
}));

const Paragraph = styled(ParagraphText)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;
