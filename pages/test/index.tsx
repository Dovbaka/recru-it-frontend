import React from 'react';
import classes from '../../styles/Test.module.scss';
import Questionnaire from '../../components/Questionnaire/Questionnaire';
import { questions } from '../../data/questions';
import { TestType } from '../../types/types';
import withUserData from '../../utils/withUserData';
import PublicLayout from '../../layouts/PublicLayout/PublicLayout';

export interface PropTypes {
  testData: TestType[];
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
  const testData = questions as TestType[];

  return {
    props: {
      testData: testData,
    },
    revalidate: 60,
  };
}

export default withUserData(Test);
