import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import classes from './CandidateItem.module.scss';
import React, { useState } from 'react';
import moment from 'moment';
import DeleteSVG from '../../SVG/DeleteSVG';
import CloseSVG from '../../SVG/CloseSVG';
import FileSVG from '../../SVG/FileSVG';
import CommentSVG from '../../SVG/CommentSVG';
import { useDispatch } from 'react-redux';
import { RecruitData } from '../../../interfaces/RecruitInterface';
import { deleteCandidate, updateCandidate } from '../../../store/recruit/actions';
import { v4 } from 'uuid';

const CandidateItem = ({ data }: { data: RecruitData }) => {
  const {
    id,
    firstName,
    lastName,
    email,
    phoneNumber,
    role,
    status,
    creationDate,
    cvUrl,
    cvName,
    comment,
    experience,
    qualification,
    selfSufficiency,
    stressTolerance,
    communicability,
    creativity,
    rationality,
  } = data;
  const [isComment, setIsComment] = useState(false);
  const [recruitComment, setRecruitComment] = useState(comment);
  const dispatch = useDispatch();

  const getRoleName = (role: number) => {
    switch (role) {
      case 1:
        return 'Designer';
      case 2:
        return 'Programmer';
      case 3:
        return 'Tester';
      default:
        return 'Candidate';
    }
  };

  const handleUpdate = (status: string, comment: string) => {
    dispatch(updateCandidate(id, { status, comment }));
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this candidate?')) {
      dispatch(deleteCandidate(id, cvName));
    }
  };

  const rows = [
    { title: 'Name', value: firstName + ' ' + lastName },
    { title: 'Role', value: getRoleName(role) },
    { title: 'Phone', value: '+' + phoneNumber },
    { title: 'Email', value: email },
  ];

  return isComment ? (
    <Grid container className={classes.mainContainer} style={status === 'new' ? { border: '1px solid #4285F4' } : {}}>
      <TextField
        fullWidth
        multiline
        variant={'standard'}
        InputProps={{ disableUnderline: true }}
        placeholder="Comment..."
        className={classes.comment}
        value={recruitComment}
        onChange={e => setRecruitComment(e.target.value)}
      />
      <Button
        variant={'contained'}
        color={'primary'}
        type="submit"
        disabled={!recruitComment || recruitComment === recruitComment}
        onClick={() => {
          setRecruitComment(recruitComment);
          setIsComment(false);
          handleUpdate(status, recruitComment);
        }}
        className={
          classes.saveButton + ' ' + (!recruitComment || recruitComment === recruitComment ? classes.disabled : '')
        }
      >
        <Typography style={{ fontSize: '18px' }}>Done</Typography>
      </Button>
      <CloseSVG
        className={classes.closeIcon}
        onClick={() => {
          setRecruitComment(recruitComment ? recruitComment : '');
          setIsComment(false);
        }}
      />
      <DeleteSVG className={classes.deleteIcon} onClick={handleDelete} />
    </Grid>
  ) : (
    <Grid
      item
      container
      xs={12}
      className={classes.mainContainer}
      style={status === 'aNew' ? { border: '1px solid #4285F4' } : {}}
    >
      <Grid container item xs={2} direction={'column'}>
        {rows.map(item => (
          <Grid item className={classes.textGridItem} key={v4()}>
            <Box className={classes.titleBox}>
              <Typography variant={'body1'}>{item.title + ':'}</Typography>
            </Box>
          </Grid>
        ))}
        <Grid item className={classes.textGridItem} style={{ margin: 0 }}>
          <Box className={classes.titleBox}>
            <Typography variant={'body1'}>CV:</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container item xs={3} direction={'column'}>
        {rows.map(item => (
          <Grid item className={classes.textGridItem} key={v4()}>
            <Box className={classes.infoBox}>
              <Typography noWrap>{item.value}</Typography>
            </Box>
          </Grid>
        ))}
        <Grid item className={classes.textGridItem} style={{ margin: 0 }}>
          <div className={classes.infoBox}>
            <a href={cvUrl} rel="noopener noreferrer" target="_blank">
              <FileSVG />
            </a>
          </div>
        </Grid>
      </Grid>
      <Grid container item xs={2} direction={'column'}>
        {[
          'Experience',
          'Creativity',
          'Rationality',
          'Qualification',
          'Self sufficiency',
          'Stress tolerance',
          'Communicability',
        ].map(item => (
          <Grid item className={classes.textGridItem} key={item}>
            <Box className={classes.titleBox}>
              <Typography variant={'body1'}>{`${item}:`}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={2} direction={'column'}>
        {[experience, creativity, rationality, qualification, selfSufficiency, stressTolerance, communicability].map(
          item => (
            <Grid item className={classes.textGridItem} key={v4()}>
              <Box className={classes.infoBox}>
                <Typography noWrap>{item?.toFixed(2)}</Typography>
              </Box>
            </Grid>
          ),
        )}
      </Grid>
      <Grid container item xs={3} direction={'column'} justifyContent={'space-between'}>
        <FormControl>
          <Box className={classes.statusDateBox}>
            <Typography className={classes.statusText} variant={'body1'}>
              Статус:
            </Typography>
            <Typography className={classes.dateText} variant={'body1'}>
              {moment(creationDate).format('DD/MM/YYYY')}
            </Typography>
          </Box>
          <Select
            style={{ width: '266px' }}
            defaultValue={status ? status : 'new'}
            value={status}
            id="grouped-select"
            onChange={e => {
              handleUpdate(String(e.target.value), recruitComment);
            }}
            displayEmpty
          >
            <MenuItem value={'new'} disabled>
              New
            </MenuItem>
            <MenuItem value={'no_status'}>No status</MenuItem>
            <MenuItem value={'no_Answer'}>No answer</MenuItem>
            <MenuItem value={'sent_test_1'}>Test sent</MenuItem>
            <MenuItem value={'interview'}>Interview</MenuItem>
            <MenuItem value={'declined'}>Declined</MenuItem>
            <MenuItem value={'hired'}>Hired</MenuItem>
          </Select>
        </FormControl>
        <Box className={classes.controlIconBox}>
          <CommentSVG
            className={classes.commentIcon + ' ' + (recruitComment !== '' ? classes.typedCommentIcon : '')}
            onClick={() => setIsComment(true)}
          />
          <DeleteSVG className={classes.deleteIcon} onClick={handleDelete} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CandidateItem;
