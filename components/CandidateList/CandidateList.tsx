import { Box, Grid, Typography } from '@mui/material';
import classes from './CandidateList.module.scss';
import PolygonIcon from '../SVG/PolygonIcon';
import CandidateItem from './CandidateItem/CandidateItem';
import { useEffect, useState } from 'react';
import { AppStateType } from '../../store/store';
import { RecruitData } from '../../interfaces/RecruitInterface';
import { useDispatch, useSelector } from 'react-redux';
import {getCandidates} from "../../store/recruit/actions";

const CandidateList = () => {
  const [activeButton, setActiveButton] = useState({
    index: 3,
    inverted: false,
  });
  const dispatch = useDispatch();
  const data = useSelector((state: AppStateType) => state.RecruitReducer.userData);
  const searchParams = useSelector((state: AppStateType) => state.RecruitReducer.searchParams);

  const filterBySearchParams = () => {
    if (searchParams)
      return data.filter(
        el =>
          el.experience >= searchParams.experience &&
          el.creativity >= searchParams.creativity &&
          el.communicability >= searchParams.communicability &&
          el.qualification >= searchParams.qualification &&
          el.rationality >= searchParams.rationality &&
          el.selfSufficiency >= searchParams.selfSufficiency &&
          el.stressTolerance >= searchParams.stressTolerance,
      );
    else return data;
  };

  const handleClick = (index: number) => {
    if (index === activeButton.index) {
      setActiveButton({ ...activeButton, inverted: !activeButton.inverted });
    } else {
      setActiveButton({ index: index, inverted: false });
    }
  };
  const sortItems = (variant: number, array: RecruitData[], inverted: boolean) => {
    if (!array.length) return array;

    const finalInverted = variant !== 4 ? inverted : !inverted;

    return [...array].sort((a, b) => {
      let item1, item2;
      switch (variant) {
        case 1: {
          item1 = a.firstName.concat(' ', a.lastName).toLowerCase();
          item2 = b.firstName.concat(' ', b.lastName).toLowerCase();
          break;
        }
        case 2: {
          item1 = a.role;
          item2 = b.role;
          break;
        }
        case 3: {
          item1 = a.status.toLowerCase();
          item2 = b.status.toLowerCase();
          break;
        }
        case 4: {
          item1 = a.creationDate;
          item2 = b.creationDate;
          break;
        }
        case 5: {
          item1 = Object.values(a).reduce((a, b) => a + b);
          item2 = Object.values(b).reduce((a, b) => a + b);
          break;
        }
        default:
          return 0;
      }

      if (item1 === item2 && variant !== 1) {
        item1 = a.firstName.concat(' ', a.lastName).toLowerCase();
        item2 = b.firstName.concat(' ', b.lastName).toLowerCase();
      }
      if (item1 < item2) {
        if (finalInverted) return 1;
        else return -1;
      }
      if (item1 > item2) {
        if (finalInverted) return -1;
        else return 1;
      }
      return 0;
    });
  };

  const [userData, setUserData] = useState(
    sortItems(activeButton.index, filterBySearchParams(), activeButton.inverted),
  );

  useEffect(() => {
    dispatch(getCandidates());
  }, []);

  useEffect(() => {
    if (searchParams) setActiveButton({ index: 5, inverted: true });
  }, [searchParams]);

  useEffect(() => {
    setUserData(sortItems(activeButton.index, filterBySearchParams(), activeButton.inverted));
  }, [activeButton, data]);

  return (
    <Box className={classes.contentBox}>
      <Grid container justifyContent="flex-start" alignItems="center" className={classes.sortButtons}>
        {['Name', 'Role', 'Status', 'Date', 'Score'].map((el, index) => (
          <button key={el} className={classes.sortButton} onClick={() => handleClick(index + 1)}>
            <Typography
              variant="subtitle1"
              className={classes.buttonText + ' ' + (activeButton.index === index + 1 ? classes.blackBtnText : '')}
            >
              {el}
            </Typography>
            <PolygonIcon
              fill={activeButton.index === index + 1 ? '#000' : '#7E7E7E'}
              className={
                classes.polygon +
                ' ' +
                (activeButton.index === index + 1 && activeButton.inverted ? classes.rotatedPolygon : '')
              }
            />
          </button>
        ))}
      </Grid>
      <Grid container direction="column" justifyContent="flex-start" wrap="nowrap" className={classes.recruitItems}>
        {userData.map(el => (
          <CandidateItem key={el?.id} data={el} />
        ))}
      </Grid>
    </Box>
  );
};

export default CandidateList;
