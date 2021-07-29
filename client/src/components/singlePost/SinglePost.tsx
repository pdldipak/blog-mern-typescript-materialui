import React from 'react';
import {
  Box,
  Paper,
  Link,
  Grid,
  Typography,
  Stack,
  IconButton,
  Badge,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { styled } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Image } from '../../utility/utilityStyled';

const SinglePost: React.FC = () => {
  return (
    <Paper sx={{ marginTop: '62px', borderRadius: '5px', marginRight: '20px' }}>
      <Box>
        <Image src="https://source.unsplash.com/random" alt="" />
      </Box>

      <Grid container p={2}>
        <Grid item>
          <Stack direction="row">
            <Typography variant="h4" mr={8} gutterBottom>
              Text:Lorem ipsum dolor
            </Typography>
            <Box sx={{ color: 'action.active' }}>
              <IconButton>
                <Badge>
                  <EditIcon color="success" />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge>
                  <DeleteIcon sx={{ color: red[500] }} />
                </Badge>
              </IconButton>
            </Box>
          </Stack>
        </Grid>
        <Grid item mb={4}>
          <Stack sx={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Typography variant="subtitle1" color="text.secondary">
              Author:
              <Link className="link" href="/posts?username=Safak">
                Safak
              </Link>
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              1 day ago
            </Typography>
          </Stack>

          <ParagraphText>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Iste error quibusdam ipsa quis quidem doloribus
            eos, dolore ea iusto impedit! Voluptatum necessitatibus eum beatae,
            adipisci voluptas a odit modi eos! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Iste error quibusdam ipsa quis quidem
            doloribus eos, dolore ea iusto impedit! Voluptatum necessitatibus
            eum beatae, adipisci voluptas a odit modi eos!
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
          </ParagraphText>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SinglePost;

const ParagraphText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body1,
  color: theme.palette.text.primary,
  marginTop: '16px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));
