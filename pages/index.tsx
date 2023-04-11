import type { NextPage } from 'next';
import classes from '../styles/Home.module.css';
import PublicLayout from '../layouts/PublicLayout/PublicLayout';
import CandidateInfo from '../components/CandidateInfo/CandidateInfo';

const Home: NextPage = () => {
  return (
    <PublicLayout data-testid="public-layout">
      <section className={classes.infoSection}>
        <CandidateInfo data-testid="candidate-info"/>
      </section>
    </PublicLayout>
  );
};

export default Home;
