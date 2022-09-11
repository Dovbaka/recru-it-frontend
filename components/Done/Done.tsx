import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import classes from './Done.module.scss';
import { DoneIcon } from '../SVG/DoneIcon';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/recruit/actions';

const Done = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(actions.clearRecruit());
    };
  }, []);

  return (
    <div className={classes.doneContainer}>
      <Typography variant={'h1'}>Done!</Typography>
      <Typography variant={'h2'}>You are registered in our database of candidates!</Typography>
      <Typography variant={'h4'}>A representative of our HR department will contact you</Typography>
      <DoneIcon />
    </div>
  );
};

export default Done;
