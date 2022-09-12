import React, { useState } from 'react';
import AnswerCheckboxes from './AnswerCheckboxes/AnswerCheckboxes';
import classes from './Question.module.scss';
import { Answer, Test } from '../../../interfaces/RecruitInterface';
import { RadioGroup, Typography } from '@mui/material';

interface PropTypes {
  testData: Test;
  resultArray: Omit<Answer, 'id'>[];
}

const RadioQuiz = ({ testData, resultArray }: PropTypes) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const answerId = (event.target as HTMLInputElement).value;
    const answer = testData.answers.find(el => el.id === answerId);

    if (answer) {
      const inResultIndex = resultArray.findIndex(obj => obj.question === testData.question);
      if (inResultIndex >= 0) {
        resultArray[inResultIndex].answerText = answer.text;
        resultArray[inResultIndex].answerValue = answer.value;
      } else {
        resultArray.push({
          question: testData.question,
          answerText: answer.text,
          answerValue: answer.value,
          category: testData.category,
        });
      }
      setSelectedAnswer(answerId);
    }
  };

  return (
    <div className={classes.container}>
      <Typography variant="h5" className={classes.title}>
        {testData.question}
      </Typography>
      <RadioGroup
        row
        aria-label={testData.question}
        name={testData.question}
        value={selectedAnswer}
        onChange={handleChange}
      >
        {testData.answers.map(element => (
          <AnswerCheckboxes currentValue={selectedAnswer} key={element.text} value={element.id}>
            {element.text}
          </AnswerCheckboxes>
        ))}
      </RadioGroup>
      <div className={classes.hl} />
    </div>
  );
};

export default RadioQuiz;
