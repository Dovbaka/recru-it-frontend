import React  from 'react';
import classes from '../../../styles/Admin.module.scss';
import AdminLayout from '../../../layouts/AdminLayout/AdminLayout';
import CandidateList from '../../../components/CandidateList/CandidateList';
import withAuthentication from "../../../utils/withAuthentication";

const Admin = () => {

    return (
        <AdminLayout>
            <section className={classes.candidateList}>
                <CandidateList />
            </section>
        </AdminLayout>
    );
};

export default withAuthentication(Admin);
