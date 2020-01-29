import React from 'react';
import { makeStyles, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
    details:{
        flexDirection: "column",
    }
}));

export default({contentModule}) => {
  const classes = useStyles();

  return (
    <ExpansionPanel style={{color: 'grey'}}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{contentModule.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
            <Typography variant='h6' className={classes.h6}>Module Objectives</Typography>
            {contentModule.objectives.map((objective, index) => (
                <Typography key={index} variant='body1'>{objective}</Typography>
            ))}
            <br/>
            <Typography variant='h6' className={classes.h6}>Instructions</Typography>
            <Typography variant='body1'>{contentModule.instructions}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}