import React from 'react';
import classes from '../../styles/Test.module.scss';
import Questionnaire from '../../components/Questionnaire/Questionnaire';
import { questions } from '../../data/questions';
import { Test } from '../../types/types';
import withUserData from '../../utils/withUserData';
import PublicLayout from '../../layouts/PublicLayout/PublicLayout';

export interface PropTypes {
  testData: Test[];
}

const Test = ({ testData }: PropTypes) => {
  return (
    <PublicLayout>
      <section className={classes.testSection}>
        <Questionnaire testData={testData} />
      </section>
    </PublicLayout>
  );
};

export async function getStaticProps() {
  const testData = questions as Test[];

  return {
    props: {
      testData: testData,
    },
    revalidate: 60,
  };
}

export default withUserData(Test);
