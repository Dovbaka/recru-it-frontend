import React from 'react';
import Login from '../../components/Login/Login';
import classes from '../../styles/Admin.module.scss';
import PublicLayout from "../../layouts/PublicLayout/PublicLayout";

const Admin = () => {
  return (
    <PublicLayout>
      <section className={classes.loginSection}>
        <Login />
      </section>
    </PublicLayout>
  );
};

export default Admin;
