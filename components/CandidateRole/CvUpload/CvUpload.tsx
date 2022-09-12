import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classes from './CvUpload.module.scss';
import { useDispatch } from 'react-redux';
import { Box, Typography } from '@mui/material';
import { actions } from '../../../store/recruit/actions';

const CvUpload = ({}) => {
  const [dropzoneText, setDropzoneText] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch();

  const maxFileSize = 1000000;
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'text/.pdf': ['.pdf'],
    },
    multiple: false,
    maxSize: maxFileSize,
    onDrop: () => {
      setIsDisabled(true);
    },
    onDropRejected: fileRejections => {
      if (fileRejections.length && fileRejections[0].file.size > maxFileSize) {
        setDropzoneText('The file size must not exceed 1 MB');
      }
      if (fileRejections.length && fileRejections[0].errors[0].code === 'file-invalid-type') {
        setDropzoneText('Only .pdf format are acceptable');
      }
    },
    onDropAccepted: acceptedFiles => {
      setDropzoneText(acceptedFiles[0].name);
      dispatch(actions.setUserFile(acceptedFiles[0]));
    },
  });

  return (
    <Box {...getRootProps()} className={classes.dropzone + ' ' + (isDisabled ? classes.disabledParentBox : '')}>
      <input {...getInputProps()} disabled={isDisabled} />
      <Box className={classes.dropZoneDashedBox + ' ' + (isDisabled ? classes.disabledBox : '')}>
        <Typography
          className={classes.dropZoneText + ' ' + (isDisabled ? classes.disabledText : '')}
          variant={dropzoneText ? 'body1' : 'h5'}
          align={'center'}
        >
          {dropzoneText ? dropzoneText : 'Upload CV'}
        </Typography>
      </Box>
    </Box>
  );
};

export default CvUpload;
