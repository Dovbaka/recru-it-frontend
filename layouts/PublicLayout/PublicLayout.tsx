import Head from 'next/head';
import React from 'react';
import classes from './PublicLayout.module.scss';
import {Container} from "@mui/material";

interface PageProps {
    children?: React.ReactNode;
    title?: string;
    description?: string;
    keywords?: string;
}

const PublicLayout = ({ children, title, description, keywords }: PageProps) => {
    return (
        <>
            <Head>
                <title>{title || 'Recru-it'}</title>
                <meta name="description" content={description || 'Website description'} />
                <meta name="robots" content="index, follow" />
                <meta name="keywords" content={keywords || 'Website'} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={classes.container}>
                <Container className={classes.contentContainer}>
                    <main className={classes.main}>
                        {children}
                    </main>
                </Container>
            </div>
        </>
    );
};

export default PublicLayout;
