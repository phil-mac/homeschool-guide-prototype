import React from 'react';
import { makeStyles, Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Divider } from '@material-ui/core';
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
        margin: '10px 20px'
    }
}));

export default({contentModule}) => {
  const classes = useStyles();

  return (
    <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{contentModule.title}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
            <Typography variant='h5' className={classes.h5}>Module Objectives Overview</Typography>
            {contentModule.parts.map((part, index) => (
                <Typography key={index} variant='body1' className={classes.p}>{part.objective}</Typography>
            ))}
            <Divider/>
            {contentModule.parts.map((part, index) => (
              <div key={index}>
                <Typography variant='h5' className={classes.h5}>{part.objective}</Typography>
                <Typography variant='h6' className={classes.h6}>Explain</Typography>
                <Typography variant='body1' className={classes.p}>{part.explain}</Typography>
                <Typography variant='h6' className={classes.h6}>Follow Along</Typography>
                <Typography variant='body1' className={classes.p}>{part.follow}</Typography>
                <Typography variant='h6' className={classes.h6}>Practice</Typography>
                <Typography variant='body1' className={classes.p}>{part.practice}</Typography>

              </div>
            ))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
  );
}