import React, { useEffect } from 'react';
import { makeStyles, Typography, FormControl, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(3),
    },
}));

export default(props) => {
  const classes = useStyles();

  const [activeProjectId, setActiveProjectId] = React.useState("0");

  const handleChangeProject = event => {
    setActiveProjectId(event.target.value);
    props.handleChangeProject(event.target.value);
  };

  return (
    <div>
        <Typography variant='h4'>Projects</Typography>
        <Typography variant='h6'>Select One</Typography>
        <FormControl component="fieldset" className={classes.formControl}>
            <RadioGroup aria-label="project" name="project1" value={activeProjectId} onChange={handleChangeProject}>
                {props.projects.map((project, index) => (
                    <FormControlLabel value={`${project.id}`} control={<Radio/>} label={project.title} key={index} disabled={index>1}/>
                ))}
            </RadioGroup>
        </FormControl>
       
    </div>
  );
}