import classes from './CandidateRole.module.scss';
import React, {useEffect} from 'react';
import withUserData from '../../utils/withUserData';
import BackgroundSheet from '../BackgroundSheet/BackgroundSheet';
import RoleBoxes from './RoleBoxes/RoleBoxes';
import { Box, Typography } from '@mui/material';
import CvUpload from './CvUpload/CvUpload';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/store';
import {useRouter} from "next/router";

const CandidateRole = () => {
  const userRole = useSelector((state: AppStateType) => state.RecruitReducer.userRole);
  const userFile = useSelector((state: AppStateType) => state.RecruitReducer.userFile);
  const router = useRouter();

  useEffect(() => {
    if (userRole && userFile) router.push('/test');
  }, [userRole, userFile]);

  return (
    <BackgroundSheet width={1100} height={835}>
      <div className={classes.container}>
        <Typography variant="h2" align={'center'} className={classes.title}>
          Before starting the test, please select the role you are <span>applying</span> for and upload your resume
        </Typography>
        <Box pt={6} pb={6}>
          <RoleBoxes userRoleId={userRole} />
        </Box>
        <CvUpload />
      </div>
    </BackgroundSheet>
  );
};

export default CandidateRole;
