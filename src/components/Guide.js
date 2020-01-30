import React from 'react';
import { makeStyles, Typography, Divider, Button } from '@material-ui/core';

import ContentModulePanel from './ContentModulePanel'

const useStyles = makeStyles({
    root:{
        // margin: '5px 0'
    },
    h3:{
        margin: '20px 0'
    },
    h5:{
        margin: '20px 0'
    },
    h6:{
        margin: '20px 10px'
    },
    p:{
        margin: '10px 20px',
    },
    p2:{
        margin: '10px 20px',
        color: '#2B6CB0'
    }
  });

export default({activeProject, activeModules}) => {
  const classes = useStyles();

  const [objectives, setObjectives] = React.useState([])

  React.useEffect(() => {
    let objectives = [...activeProject.objectives]
    activeModules.forEach(contentModule => {
        contentModule.parts.forEach(part => {
            objectives = [...objectives, part.objective]
        })
    })
    setObjectives(objectives)
  },[activeProject, activeModules])

  return (
    <div >
        <Typography variant='h3' className={classes.h3}>{activeProject.title}</Typography>
        <Divider />
        <Typography variant='h5' className={classes.h5}>Challenge</Typography>
        <Typography variant='body1' className={classes.p}>{activeProject.challenge}</Typography>

        <Typography variant='h5' className={classes.h5}>Learning Objectives</Typography>
        {objectives.map((objective, i) => (
            <Typography variant='body1' className={i < 2 ? classes.p : classes.p2} key={i}>{objective} </Typography>
        ))}

        <Typography variant='h5' className={classes.h5}>Prepare</Typography>
        <Typography variant='body1' className={classes.p}>{activeProject.prepare}</Typography>
        <Typography variant='h6' className={classes.h6}>Supplies</Typography>
        <Typography variant='body1' className={classes.p}>{activeProject.supplies}</Typography>

        <Typography variant='h5' className={classes.h5}>Do</Typography>
        {activeProject.parts.map((part, i) => (
            <div key={i}>
            <Typography variant='h6' className={classes.h6}>Step {i+1}: {part.title}</Typography>
            {part.steps.map((step, j) => (
                (step.contentModule === undefined) 
                ? <Typography variant='body1' className={classes.p} key={j}>{step.instructions}</Typography>
                : (activeModules.includes(step.contentModule)) 
                    ? <div key={j}>
                        <Typography variant='body1' className={classes.p} style={{color:'#2B6CB0'}}>{step.instructions}</Typography>
                        <div className={classes.p}>
                            <ContentModulePanel contentModule={step.contentModule} />
                        </div>
                      </div>
                    : <div key={j}></div>
                
            ))}
            <Button variant="contained" color="primary" className={classes.p}>Upload Artifact</Button>
            </div>
        ))}

        <Typography variant='h5' className={classes.h5}>Reflect</Typography>
        <Typography variant='body1' className={classes.p}>{activeProject.reflect}</Typography>
        <Button variant="contained" color="primary" className={classes.p}>Upload Additional Artifacts</Button>
    </div>
  );
}