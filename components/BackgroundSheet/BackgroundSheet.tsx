import classes from './BackgroundSheet.module.scss';
import React from 'react';
import { Container, Grid } from '@mui/material';

interface PropTypes {
  children: React.ReactNode;
  width?: number;
  height?: number;
}

const BackgroundSheet = ({ children, height = 553, width = 604 }: PropTypes) => {
  return (
    <Container className={classes.container}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.formContainer}
        style={{ width: width, height: height }}
      >
        {children}
      </Grid>
    </Container>
  );
};

export default BackgroundSheet;
