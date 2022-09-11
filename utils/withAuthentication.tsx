import { useSelector } from 'react-redux';
import { AppStateType } from '../store/store';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react';

//Redirect to home page if not Authorized
const withAuthentication = <P extends object>(WrappedComponent: React.ComponentType<P>) => {
  return function Wrapper(props: P) {
    const isAuth = useSelector((state: AppStateType) => state.AuthReducer.isAuth);
    const initialized = useSelector((state: AppStateType) => state.AuthReducer.initialized);
    const router = useRouter();

    useEffect(() => {
      if (!isAuth && initialized) {
        router.push('/admin');
      }
    }, [isAuth, initialized]);

    return isAuth && <WrappedComponent {...props} />;
  };
};

export default withAuthentication;
