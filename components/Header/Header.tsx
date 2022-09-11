import classes from './Header.module.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/auth/actions';
import { Avatar, Button, Container, Typography } from '@mui/material';

const Header = () => {
  const profileName = 'Admin';
  const dispatch = useDispatch();

  const writeInitials = () => {
    const nameWords = profileName.split(' ');
    let initials;
    if (nameWords.length > 1) {
      initials = nameWords[0].charAt(0).concat(nameWords[1].charAt(0)).toUpperCase();
    } else {
      initials = nameWords[0].charAt(0).toUpperCase();
    }
    return initials;
  };

  return (
    <header className={classes.header}>
      <Container className={classes.container}>
        <div className={classes.avatarContainer}>
          <div className={classes.avatarBox}>
            <Avatar>
              <Typography variant={'h5'} className={classes.imageText}>
                {writeInitials()}
              </Typography>
            </Avatar>
          </div>
          <Button className={classes.logOut} color="primary" onClick={() => dispatch(actions.logOut())}>
            Exit
          </Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
