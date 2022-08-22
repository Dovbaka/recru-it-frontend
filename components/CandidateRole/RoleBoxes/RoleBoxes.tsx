import classes from './RoleBoxes.module.scss';
import RoleBoxItem from './RoleBoxItem/RoleBoxItem';
import DesignerIcon from '../../SVG/DesignerIcon';
import ProgrammerIcon from '../../SVG/ProgrammerIcon';
import QAIcon from '../../SVG/QAIcon';
import { Grid } from '@mui/material';

const RoleBoxes = ({ userRoleId }: { userRoleId: number | null }) => {
  const roleBoxData = [
    {
      id: 1,
      title: 'Designer',
      icon: DesignerIcon,
    },
    {
      id: 2,
      title: 'Programmer',
      icon: ProgrammerIcon,
    },
    {
      id: 3,
      title: 'Tester',
      icon: QAIcon,
    },
  ];

  return (
    <form className={classes.form}>
      <Grid container justifyContent={'center'} className={classes.container}>
        {roleBoxData.map(el => {
          const { icon: ItemIcon } = el;
          return (
            <Grid item className={classes.roleGridItem} xs={4} key={el.id}>
              <RoleBoxItem id={el.id} userRoleId={userRoleId} title={el.title} icon={<ItemIcon />} />
            </Grid>
          );
        })}
      </Grid>
    </form>
  );
};

export default RoleBoxes;
