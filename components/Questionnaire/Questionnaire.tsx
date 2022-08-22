import Question from './Question/Question';
import React, { useRef } from 'react';
import { Result, TestType } from '../../types/types';
import classes from './Questionnaire.module.scss';
import { Button, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../store/store';
import { useRouter } from 'next/router';

interface PropTypes {
  testData: TestType[];
}

const Questionnaire = ({ testData }: PropTypes) => {
  const resultArray = useRef([] as Result[]);
  const dispatch = useDispatch();
  const router = useRouter();
  const userInfo = useSelector((state: AppStateType) => state.RecruitReducer.userInfo);
  const userRole = useSelector((state: AppStateType) => state.RecruitReducer.userRole);
  const userFile = useSelector((state: AppStateType) => state.RecruitReducer.userFile);

  const handleSubmit = () => {
    const userId = userInfo.phone + '_' + Date.now();

    if (resultArray.current.length < testData.length) {
      //setMessage(`You answered ${resultArray.length}/${testData.length} questions`);
    }
    console.log(resultArray);
    console.log(
      userId,
      userInfo.firstName,
      userInfo.lastName,
      userInfo.email,
      userInfo.phone,
      userRole,
      resultArray,
      userFile?.name,
      userFile,
    );
    router.push('/done');
  };

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
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </>
  );
};

export default Questionnaire;
