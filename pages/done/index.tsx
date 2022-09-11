import React from 'react';
import classes from '../../styles/Done.module.scss';
import Done from '../../components/Done/Done';
import PublicLayout from '../../layouts/PublicLayout/PublicLayout';

const DonePage = () => {
  return (
    <PublicLayout>
      <section className={classes.doneSection}>
        <Done />
      </section>
    </PublicLayout>
  );
};

export default DonePage;
