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
  const [isComment, setIsComment] = useState(false);
  const [comment, setComment] = useState(data?.comment ? data?.comment : '');
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
    dispatch(updateCandidate(data?.id, { status, comment }));
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this candidate?')) {
      dispatch(deleteCandidate(data?.id, data?.cvName));
    }
  };

  return isComment ? (
    <Grid
      container
      className={classes.mainContainer}
      style={data?.status === 'new' ? { border: '1px solid #4285F4' } : {}}
    >
      <TextField
        fullWidth
        multiline
        variant={'standard'}
        InputProps={{ disableUnderline: true }}
        placeholder="Comment..."
        className={classes.comment}
        value={comment}
        onChange={e => setComment(e.target.value)}
      />
      <Button
        variant={'contained'}
        color={'primary'}
        type="submit"
        disabled={!comment || comment === data?.comment}
        onClick={() => {
          setComment(comment);
          setIsComment(false);
          handleUpdate(data?.status, comment);
        }}
        className={classes.saveButton + ' ' + (!comment || comment === data?.comment ? classes.disabled : '')}
      >
        <Typography style={{ fontSize: '18px' }}>Готово</Typography>
      </Button>
      <CloseSVG
        className={classes.closeIcon}
        onClick={() => {
          setComment(data?.comment ? data?.comment : '');
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
      style={data?.status === 'aNew' ? { border: '1px solid #4285F4' } : {}}
    >
      <Grid container item xs={2} direction={'column'}>
        <Grid item className={classes.textGridItem}>
          <Box className={classes.titleBox}>
            <Typography variant={'body1'}>Name:</Typography>
          </Box>
        </Grid>
        <Grid item className={classes.textGridItem}>
          <Box className={classes.titleBox}>
            <Typography variant={'body1'}>Role:</Typography>
          </Box>
        </Grid>
        <Grid item className={classes.textGridItem}>
          <Box className={classes.titleBox}>
            <Typography variant={'body1'}>Phone:</Typography>
          </Box>
        </Grid>
        <Grid item className={classes.textGridItem}>
          <Box className={classes.titleBox}>
            <Typography variant={'body1'}>Email:</Typography>
          </Box>
        </Grid>
        <Grid item className={classes.textGridItem} style={{ margin: 0 }}>
          <Box className={classes.titleBox}>
            <Typography variant={'body1'}>CV:</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container item xs={3} direction={'column'}>
        <Grid item className={classes.textGridItem}>
          <Box className={classes.infoBox}>
            <Typography noWrap>{data?.firstName + ' ' + data?.lastName}</Typography>
          </Box>
        </Grid>
        <Grid item className={classes.textGridItem}>
          <Box className={classes.infoBox}>
            <Typography>{getRoleName(data?.role)}</Typography>
          </Box>
        </Grid>
        <Grid item className={classes.textGridItem}>
          <Box className={classes.infoBox}>
            <Typography noWrap>{'+' + data?.phoneNumber}</Typography>
          </Box>
        </Grid>
        <Grid item className={classes.textGridItem}>
          <Box className={classes.infoBox}>
            <Typography noWrap className={classes.email}>
              {data?.email}
            </Typography>
          </Box>
        </Grid>
        <Grid item className={classes.textGridItem} style={{ margin: 0 }}>
          <div className={classes.infoBox}>
            <a href={data.cvUrl} rel="noopener noreferrer" target="_blank">
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
        {[
          data?.experience,
          data?.creativity,
          data?.rationality,
          data?.qualification,
          data?.selfSufficiency,
          data?.stressTolerance,
          data?.communicability,
        ].map(item => (
          <Grid item className={classes.textGridItem} key={v4()}>
            <Box className={classes.infoBox}>
              <Typography noWrap>{item?.toFixed(2)}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Grid container item xs={3} direction={'column'} justifyContent={'space-between'}>
        <FormControl>
          <Box className={classes.statusDateBox}>
            <Typography className={classes.statusText} variant={'body1'}>
              Статус:
            </Typography>
            <Typography className={classes.dateText} variant={'body1'}>
              {moment(data?.creationDate).format('DD/MM/YYYY')}
            </Typography>
          </Box>
          <Select
            style={{ width: '266px' }}
            defaultValue={data?.status ? data?.status : 'aNew'}
            value={data?.status}
            id="grouped-select"
            onChange={e => {
              handleUpdate(String(e.target.value), data?.comment);
            }}
            displayEmpty
          >
            <MenuItem value={'new'} disabled>
              Новий
            </MenuItem>
            <MenuItem value={'no_status'}>Без статусу</MenuItem>
            <MenuItem value={'no_Answer'}>Немає відповіді</MenuItem>
            <MenuItem value={'sent_test_1'}>Тестове завдання</MenuItem>
            <MenuItem value={'interview'}>Запрошений на співбесіду</MenuItem>
            <MenuItem value={'declined'}>Відхилений</MenuItem>
            <MenuItem value={'hired'}>Найнятий</MenuItem>
          </Select>
        </FormControl>
        <Box className={classes.controlIconBox}>
          <CommentSVG
            className={classes.commentIcon + ' ' + (data?.comment !== '' ? classes.typedCommentIcon : '')}
            onClick={() => setIsComment(true)}
          />
          <DeleteSVG className={classes.deleteIcon} onClick={handleDelete} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default CandidateItem;
