import React from 'react';
import { makeStyles, Typography, Divider } from '@material-ui/core';

const useStyles = makeStyles({
    
  });

export default(props) => {
  const classes = useStyles();

  return (
    <div>
        <Typography variant='h6'>Guide Preview</Typography>
        <Divider />
        <Typography variant='h3'>{props.activeProject.title}</Typography>
        {props.activeModules.map((learningModule, index) => (
            <Typography variant='h5' key={index}>{learningModule.title}</Typography>
        ))}

        
    </div>
  );
}