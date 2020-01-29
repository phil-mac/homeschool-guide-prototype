import React from 'react';
import {Container, Paper, Grid, makeStyles} from '@material-ui/core';

import TopBar from './components/TopBar';
import Guide from './components/Guide';
import ProjectSelect from './components/ProjectSelect';
import ModuleSelect from './components/ModuleSelect';

import {projects, modules} from './exampleData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default() => {
  const classes = useStyles();

  return (
    <div style={{background: '#E2E8F0', minHeight:'100vh'}}>
      <TopBar/>
      <Container maxWidth='md' style={{paddingTop: '20px'}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <ProjectSelect projects={projects}/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <ModuleSelect modules={modules}/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Guide projects={projects} modules={modules}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}