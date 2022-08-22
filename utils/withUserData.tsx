import { useSelector } from 'react-redux';
import { AppStateType } from '../store/store';
import {useLayoutEffect, useState} from 'react';
import { useRouter } from 'next/router';
import React from 'react';

//Redirect to home page if no user data saved in store
const withUserData = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return function Wrapper(props: P) {
    const userRole = useSelector((state: AppStateType) => state.RecruitReducer.userRole);
    const userFile = useSelector((state: AppStateType) => state.RecruitReducer.userFile);
    const userInfo = useSelector((state: AppStateType) => state.RecruitReducer.userInfo);
    const [verified, setVerified] = useState(false);
    const router = useRouter();

    useLayoutEffect(() => {
      if (!userInfo.email) router.push('/');
      if (userInfo.email && (!userFile || !userRole)) router.push('/role');
      setVerified(true);
    }, [userInfo, userFile, userRole]);

    if (!verified) return <div />;

    return <WrappedComponent {...props} />;
  };
};

export default withUserData;
