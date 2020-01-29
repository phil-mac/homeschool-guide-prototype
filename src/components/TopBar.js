import React from 'react';
import { makeStyles, Typography, AppBar, Toolbar } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "center",
    },
  }));

export default() => {
  const classes = useStyles();

  return (
    <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Homeschool Guide Curriculum Prototype
          </Typography>
        </Toolbar>
    </AppBar>
  );
}