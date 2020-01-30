import React from 'react';
import {Container, Paper, Grid, makeStyles, Box, Drawer, CssBaseline, AppBar, Toolbar, Divider, Typography} from '@material-ui/core';

import Guide from './components/Guide';
import ProjectSelect from './components/ProjectSelect';
import ModuleSelect from './components/ModuleSelect';

import {projects} from './exampleData';

const drawerWidth = '30%';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth})`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#EDF2F7'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3)
  },
  paper: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));

export default() => {
  const classes = useStyles();

  const [activeProject, setActiveProject] = React.useState(projects[0])

  const handleChangeProject = id => {
    setActiveProject(projects[id])
    setProjectModules(projects[id].contentModules)
    setActiveModules([])
  }

  const [projectModules, setProjectModules] = React.useState(projects[0].contentModules)

  const [activeModules, setActiveModules] = React.useState([]);

  const handleSetModules = selectedModules => {
    setActiveModules(projectModules.filter(contentModule => (
      selectedModules[contentModule.title]
    )))
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Homeschool Guide Curriculum Prototype
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} style={{background: '#EDF2F7' }}>
          <Typography variant='h5' className={classes.content} style={{background: '#EDF2F7' }}>Guide Builder</Typography>
        </div>
        <Paper className={classes.paper}>
          <ProjectSelect projects={projects} handleChangeProject={handleChangeProject}/>
        </Paper>
        <Paper className={classes.paper}>
          <ModuleSelect projectModules={projectModules} activeProject={activeProject} handleSetModules={handleSetModules}/>
        </Paper>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Guide projects={projects} activeProject={activeProject} activeModules={activeModules}/>
      </main>
    </div>
  );
}