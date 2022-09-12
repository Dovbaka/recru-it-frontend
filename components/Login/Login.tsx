import React, { useEffect } from 'react';
import classes from './Login.module.scss';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import BackgroundSheet from '../BackgroundSheet/BackgroundSheet';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { actions, login } from '../../store/auth/actions';
import { AppStateType } from '../../store/store';
import { useRouter } from 'next/router';

type AdminSubmitForm = {
  email: string;
  password: string;
};

const Login = () => {
  const authError = useSelector((state: AppStateType) => state.AuthReducer.errorMessage);
  const isPending = useSelector((state: AppStateType) => state.AuthReducer.isPending);
  const isAuth = useSelector((state: AppStateType) => state.AuthReducer.isAuth);
  const dispatch = useDispatch();
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().trim().required('Required'),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AdminSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: AdminSubmitForm) => {
    dispatch(actions.clearErrors());
    dispatch(login(data.email, data.password));
  };

  useEffect(() => {
    if (authError) {
      setError('email', { type: 'custom', message: authError });
      setError('password', { type: 'custom', message: authError });
    }
  }, [authError, setError]);

  useEffect(() => {
    if (isAuth) router.replace('/admin/candidate-list');
  }, [isAuth, router]);

  return (
    <BackgroundSheet>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formBox}>
        <Grid container justifyContent="center">
          <Typography variant="h2" className={classes.header}>
            Welcome
          </Typography>
        </Grid>
        <Grid item className={classes.emailGridItem}>
          <TextField
            type="text"
            placeholder="Email"
            label={'Email'}
            fullWidth
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Grid>
        <Grid item className={classes.passwordGridItem}>
          <TextField
            type="password"
            placeholder="Password"
            label={'Password'}
            fullWidth
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Grid>
        <Grid item container className={classes.buttonContainer}>
          <Grid item className={classes.loginButton}>
            <Button
              style={{
                height: '44px',
              }}
              variant={'contained'}
              color={'primary'}
              type="submit"
              className={classes.customButton}
              disabled={isPending}
            >
              Sign in
            </Button>
          </Grid>
        </Grid>
      </form>
    </BackgroundSheet>
  );
};

export default Login;
