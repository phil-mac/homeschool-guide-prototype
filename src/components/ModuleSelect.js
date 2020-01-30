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

  const [modulesState, setModulesState] = React.useState({});

  const handleModulesChange = name => event => {
    const updatedModules = { ...modulesState, [name]: event.target.checked }
    console.log(updatedModules)
    setModulesState(updatedModules)
    props.handleSetModules(updatedModules)
  };

  React.useEffect(() => {
    console.log('reset modules')
    const moduleStatus = {};
    props.projectModules.forEach(contentModule => {
        moduleStatus[contentModule.title] = false;
    })
    setModulesState(moduleStatus)
    console.log(moduleStatus);
  }, [props.activeProject])

  return (
    <div>
        <Typography variant='h4'>Content Modules</Typography>
        <Typography variant='h6'>Select Multiple to apply to Project</Typography>
        <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
                {props.projectModules.map((contentModule, index) => (
                    <FormControlLabel
                    control={<Checkbox checked={modulesState[contentModule.title]} onChange={handleModulesChange(contentModule.title)} value={contentModule.title} />}
                    label={contentModule.title} key={index}
                />
                ))}
            </FormGroup>
      </FormControl>

    </div>
  );
}