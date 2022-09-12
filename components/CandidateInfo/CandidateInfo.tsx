import classes from './CandidateInfo.module.scss';
import BackgroundSheet from '../BackgroundSheet/BackgroundSheet';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { actions } from '../../store/recruit/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/store';

type UserSubmitForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

const CandidateInfo: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().required('Email is required'),
    phone: Yup.string().trim().required('Required').matches(phoneRegExp, 'Phone number is not valid'),
  });
  const userInfo = useSelector((state: AppStateType) => state.RecruitReducer.userInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      ...userInfo,
    },
  });

  const onSubmit = (data: UserSubmitForm) => {
    dispatch(
      actions.setUserInfo({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
      }),
    );
    router.push('/role');
  };

  return (
    <BackgroundSheet width={1100} height={835}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formBox}>
        <Typography variant="h2" align={'center'} className={classes.title}>
          Welcome, please introduce yourself
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              type="text"
              label="First name"
              placeholder="First name"
              fullWidth
              {...register('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type="text"
              label="Last name"
              placeholder="Last name"
              fullWidth
              {...register('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              label="Email"
              placeholder="email"
              fullWidth
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="text"
              label={'Phone number'}
              placeholder="Phone number"
              fullWidth
              {...register('phone')}
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          </Grid>
        </Grid>
        <div className={classes.buttonBox}>
          <Button type={'submit'} variant={'contained'}>
            Next
          </Button>
        </div>
      </form>
    </BackgroundSheet>
  );
};

export default CandidateInfo;
