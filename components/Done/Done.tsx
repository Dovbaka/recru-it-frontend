import React  from 'react';
import { Typography } from '@mui/material';
import classes from './Done.module.scss';
import { DoneIcon } from '../SVG/DoneIcon';

const Done = () => {

    return (
        <div className={classes.doneContainer}>
            <Typography variant={'h1'}>Готово!</Typography>
            <Typography variant={'h2'}>Ви зареєстровані в нашій базі кандидатів! </Typography>
            <Typography variant={'h4'}>Представник нашого HR відділу зявжется з вами</Typography>
            <DoneIcon />
        </div>
    );
};

export default Done;
