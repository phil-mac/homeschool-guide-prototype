import React from 'react';
import { makeStyles, Typography, FormControl, FormGroup, Checkbox, FormControlLabel } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
}));

export default(props) => {
  const classes = useStyles();
  

//   const { gilad, jason, antoine } = props.modulesState;

  return (
    <div>
        <Typography variant='h4'>Learning Modules</Typography>
        <Typography variant='h6'>Select Multiple to apply to Project</Typography>
        <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
                {props.projectModules.map((learningModule, index) => (
                    <FormControlLabel
                    control={<Checkbox checked={props.modulesState[learningModule.title]} onChange={props.handleModulesChange(learningModule.title)} value={learningModule.title} />}
                    label={learningModule.title}
                />
                ))}
            </FormGroup>
      </FormControl>

    </div>
  );
}