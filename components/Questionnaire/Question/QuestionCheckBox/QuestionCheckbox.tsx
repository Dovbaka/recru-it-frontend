import { Box, CheckboxProps } from '@mui/material';
import CheckIcon from '../../../SVG/CheckIcon';
import UnCheckIcon from '../../../SVG/UnCheckIcon';

interface PropTypes extends CheckboxProps {
  isChecked: boolean;
}

const QuestionCheckbox = ({ isChecked }: PropTypes) => {
  return (
    <Box alignItems={'center'} display={'flex'}>
      {isChecked ? <CheckIcon /> : <UnCheckIcon />}
    </Box>
  );
};

export default QuestionCheckbox;
