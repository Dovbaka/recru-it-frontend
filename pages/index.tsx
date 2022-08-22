import type { NextPage } from 'next';
import classes from '../styles/Home.module.css';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';
import CandidateInfo from '../components/CandidateInfo/CandidateInfo';

const Home: NextPage = () => {
  return (
    <PublicLayout>
      <section className={classes.infoSection}>
        <CandidateInfo />
      </section>
    </PublicLayout>
  );
};

export default Home;
