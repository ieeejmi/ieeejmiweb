import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EventIcon from '@material-ui/icons/Event';
import { List, ListItem } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      padding: theme.spacing(2),
    },
  }),
);


export default function Events() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <List>
        <ListItem>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}><EventIcon /></Button>
        </ListItem>
      </List>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>Add Calender Events</Typography>
      </Popover>
    </div>
  );
}
