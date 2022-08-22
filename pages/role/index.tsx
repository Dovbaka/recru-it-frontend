import React from 'react';
import classes from '../../styles/Role.module.scss';
import withUserData from '../../utils/withUserData';
import PublicLayout from '../../layouts/PublicLayout/PublicLayout';
import CandidateRole from '../../components/CandidateRole/CandidateRole';

const Role = () => {
  return (
    <PublicLayout>
      <section className={classes.roleSection}>
        <CandidateRole />
      </section>
    </PublicLayout>
  );
};

export default withUserData(Role);
