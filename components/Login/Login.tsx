import React from 'react';
import classes from './Login.module.scss';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import BackgroundSheet from '../BackgroundSheet/BackgroundSheet';
import {Button, Grid, TextField, Typography} from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

type AdminSubmitForm = {
  email: string;
  password: string;
};

const Login = () => {
  //const authError = useSelector((state: AppStateType) => state.AuthReducer.errorMessage);
  const isPending = false;
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    email: Yup.string().required('Required'),
    password: Yup.string().trim().required('Required'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: AdminSubmitForm) => {
    //dispatch(loginAdmin(formik.values.email, formik.values.password));
    console.log(data);
  };

  /*useEffect(()=>{
        if(authError) formik.setFieldError('email', 'Невірний логін або пароль');
        else (formik.setFieldError('email', ''));
    }, [authError])*/

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
              // disabled={props.disabled}
              className={classes.customButton + ' ' + (isPending ? classes.pending : '')}
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
