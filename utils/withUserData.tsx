import { useSelector } from 'react-redux';
import { AppStateType } from '../store/store';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

//Redirect to home page if no user data saved in store
const withUserData = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return function Wrapper(props: P) {
    const userRole = useSelector((state: AppStateType) => state.RecruitReducer.userRole);
    const userFile = useSelector((state: AppStateType) => state.RecruitReducer.userFile);
    const userInfo = useSelector((state: AppStateType) => state.RecruitReducer.userInfo);
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      if (!userInfo.email) {
        router.replace('/');
        return;
      }
      if ((!userFile || !userRole) && router.pathname === '/test') {
        router.replace('/role');
        return;
      }
      setLoading(false);
    }, [userInfo, userFile, userRole]);

    if (loading) return null; //Prevent component flesh if redirect will fire up
    return <WrappedComponent {...props} />;
  };
};

export default withUserData;
