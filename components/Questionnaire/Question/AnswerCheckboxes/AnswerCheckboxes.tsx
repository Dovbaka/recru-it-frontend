import React from 'react';
import { FormControlLabel, Typography, Radio } from '@mui/material';
import classes from './AnswerCheckboxes.module.scss';
import QuestionCheckbox from '../QuestionCheckBox/QuestionCheckbox';

interface PropTypes {
  children: React.ReactNode;
  currentValue: string;
  value: string;
}

const AnswerCheckboxes = function Answer({ children, currentValue, value }: PropTypes) {
  const isChecked = currentValue === value; // True if localValue equal to selected value

  return (
    <FormControlLabel
      className={classes.answerComponent + ' ' + (isChecked && classes.answerBackgroundChecked)}
      value={value}
      control={
        <Radio
          checkedIcon={<QuestionCheckbox isChecked={isChecked} />}
          icon={<QuestionCheckbox isChecked={isChecked} />}
          checked={isChecked}
          className={classes.checkboxPadding}
        />
      }
      label={
        <Typography className={classes.label} variant="body1">
          {children}
        </Typography>
      }
    />
  );
};

export default AnswerCheckboxes;
