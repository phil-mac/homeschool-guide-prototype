import React from 'react';
import {Container, Paper, Grid, makeStyles} from '@material-ui/core';

import TopBar from './components/TopBar';
import Guide from './components/Guide';
import ProjectSelect from './components/ProjectSelect';
import ModuleSelect from './components/ModuleSelect';

import {projects} from './exampleData';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

export default() => {
  const classes = useStyles();

  const [activeProject, setActiveProject] = React.useState(projects[0]);

  const handleChangeProject = id => {
    setActiveProject(projects[id]);
    setProjectModules(projects[id].availableModules)
  }

  const [projectModules, setProjectModules] = React.useState(projects[0].availableModules)

  const [modulesState, setModulesState] = React.useState({
    p1: true,
    p2: false,
  });

  const handleModulesChange = name => event => {
    setModulesState({ ...modulesState, [name]: event.target.checked });
  };

  return (
    <div style={{background: '#E2E8F0', minHeight:'100vh'}}>
      <TopBar/>
      <Container maxWidth='md' style={{paddingTop: '20px'}}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <ProjectSelect projects={projects} handleChangeProject={handleChangeProject}/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <ModuleSelect projectModules={projectModules} modulesState={modulesState} handleModulesChange={handleModulesChange}/>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Guide projects={projects} activeProject={activeProject}/>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}