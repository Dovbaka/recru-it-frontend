import Question from './Question/Question';
import React, { useEffect, useRef } from 'react';
import { Answer, Test } from '../../interfaces/RecruitInterface';
import classes from './Questionnaire.module.scss';
import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/store';
import { useRouter } from 'next/router';
import { setProfileAnswers } from '../../store/recruit/actions';
import { useSnackbar } from 'notistack';

interface PropTypes {
  testData: Test[];
}

const Questionnaire = ({ testData }: PropTypes) => {
  const resultArray = useRef([] as Answer[]);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const router = useRouter();
  const userInfo = useSelector((state: AppStateType) => state.RecruitReducer.userInfo);
  const userRole = useSelector((state: AppStateType) => state.RecruitReducer.userRole);
  const userFile = useSelector((state: AppStateType) => state.RecruitReducer.userFile);
  const testIsSent = useSelector((state: AppStateType) => state.RecruitReducer.testIsSent);
  const isPending = useSelector((state: AppStateType) => state.RecruitReducer.isPending);

  const handleSubmit = () => {
    if (resultArray.current.length < testData.length) {
      console.log(resultArray.current)
      enqueueSnackbar(`You answered ${resultArray.current.length}/${testData.length} questions`);
      return;
    }
    if (!userRole || !userFile) {
      enqueueSnackbar(`Some data is missing`);
      return;
    }
    dispatch(
      setProfileAnswers(
        userInfo.firstName,
        userInfo.lastName,
        userInfo.email,
        userInfo.phone,
        userRole,
        resultArray.current,
        userFile,
      ),
    );
  };

  useEffect(() => {
    if (testIsSent) {
      router.push('/done');
    }
  }, [testIsSent]);

  return (
    <>
      <Grid container spacing={4}>
        {testData.map((el, index) => (
          <Grid item xs={12} key={el.question + index}>
            <Question testData={el} resultArray={resultArray.current} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.buttonBox}>
        <Button variant={'contained'} onClick={handleSubmit} disabled={isPending}>
          Submit
        </Button>
      </div>
    </>
  );
};

export default Questionnaire;
