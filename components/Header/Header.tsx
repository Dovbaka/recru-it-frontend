import classes from './Header.module.scss';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/store';
import { actions } from '../../store/Recruit/actions';
import { Avatar, Container, Typography } from '@mui/material';

const Header = () => {
  const profileName = 'Admin';
  const dispatch = useDispatch();
  const searchParams = useSelector((state: AppStateType) => state.RecruitReducer.searchParams);

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
        <div className={classes.buttonBox}>
          {searchParams && (
            <button className={classes.cancel} onClick={() => dispatch(actions.clearSearchParams())}>
              X
            </button>
          )}
        </div>

        <div className={classes.avatarContainer}>
          <div className={classes.avatarBox}>
            <Avatar>
              <Typography variant={'h5'} className={classes.imageText}>
                {writeInitials()}
              </Typography>
            </Avatar>
          </div>
          <Typography className={classes.logOut} color="primary" variant="h6">
            Exit
          </Typography>
        </div>
      </Container>
    </header>
  );
};

export default Header;
