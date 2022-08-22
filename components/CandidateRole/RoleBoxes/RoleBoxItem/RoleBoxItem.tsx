import classes from './RoleBoxItem.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { actions } from '../../../../store/recruit/actions';

type PropTypes = {
  id: number;
  title: string;
  icon: JSX.Element;
  userRoleId: number | null;
};

const RoleBoxItem = ({ id, icon, title, userRoleId }: PropTypes) => {
  const dispatch = useDispatch();
  return (
    <Box
      className={classes.roleContainer + ' ' + (userRoleId === id && classes.active)}
      onClick={() => {
        dispatch(actions.setUserRole(id));
      }}
    >
      <Box className={classes.roleBox}>{icon}</Box>
      <Typography variant={'h6'} align={'center'} className={classes.roleTitle}>
        {title}
      </Typography>
    </Box>
  );
};

export default RoleBoxItem;
