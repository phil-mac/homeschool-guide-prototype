import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';

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
        margin: '5px 20px'
    }
  });

export default({activeProject, activeModules}) => {
  const classes = useStyles();

  const [objectives, setObjectives] = React.useState([])

  React.useEffect(() => {
    let objectives = [...activeProject.objectives]
    activeModules.forEach(contentModule => {
        objectives = [...objectives, ...contentModule.objectives]
    })
    setObjectives(objectives)
  },[activeProject, activeModules])

  return (
    <div >
        <Typography variant='h6'>Guide Preview</Typography>
        <Divider />
        <Typography variant='h3' className={classes.h3}>{activeProject.title}</Typography>
        {/* {activeModules.map((learningModule, index) => (
            <Typography variant='h5' key={index}>{learningModule.title}</Typography>
        ))} */}
        <Typography variant='h5' className={classes.h5}>Challenge</Typography>
        <Typography variant='body1' className={classes.p}>{activeProject.challenge}</Typography>

        <Typography variant='h5' className={classes.h5}>Learning Objectives</Typography>
        {objectives.map(objective => (
            <Typography variant='body1' className={classes.p}>{objective}</Typography>
        ))}

        <Typography variant='h5' className={classes.h5}>Prepare</Typography>
        <Typography variant='body1' className={classes.p}>{activeProject.prepare}</Typography>
        <Typography variant='h6' className={classes.h6}>Supplies</Typography>
        <Typography variant='body1' className={classes.p}>{activeProject.supplies}</Typography>

        <Typography variant='h5' className={classes.h5}>Do</Typography>
        {activeProject.parts.map((part, index) => (
            <>
            <Typography variant='h6' className={classes.h6}>Step {index+1}: {part.title}</Typography>
            {part.steps.map(step => (
                (step.contentModule === undefined) 
                ? <Typography variant='body1' className={classes.p}>{step.instructions}</Typography>
                : (activeModules.includes(step.contentModule)) 
                    ? <div>
                        <Typography variant='body1' className={classes.p}>{step.instructions}</Typography>
                        <div className={classes.p}>
                            <ContentModulePanel contentModule={step.contentModule} />
                        </div>
                      </div>
                    : <></>
                
            ))}
            </>
        ))}
    </div>
  );
}