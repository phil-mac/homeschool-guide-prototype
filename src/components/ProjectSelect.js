import React from 'react';
import { makeStyles, Typography, FormControl, RadioGroup, Radio, FormControlLabel } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(3),
    },
}));

export default(props) => {
  const classes = useStyles();

  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
        <Typography variant='h4'>Projects</Typography>
        <Typography variant='h6'>Select One</Typography>
        <FormControl component="fieldset" className={classes.formControl}>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            {props.projects.map((project, index) => (
                <FormControlLabel value={project.title} control={<Radio />} label={project.title} />
            ))}
          <FormControlLabel
            value="disabled"
            disabled
            control={<Radio />}
            label="(Disabled option)"
          />
        </RadioGroup>
        </FormControl>
       
    </div>
  );
}