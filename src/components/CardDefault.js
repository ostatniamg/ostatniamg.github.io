import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import {
  Typography,
  Grid,
  Card,
  CardContent,
  CircularProgress,
} from '@material-ui/core';

import { DoneOutline } from '@material-ui/icons';

const styles = {
  card: {
    margin: 10,
  },
  subtitle: {
    marginTop: 6,
  },
};

let sideContent = (props) => {
  if ( props.inactive ) { return ( <DoneOutline /> ); }
  else if ( props.progress ) {
    return (
      <CircularProgress 
        variant="static" 
        value={ props.progress } 
      />
    );
  }
  else { return ( null ); }
}

let CardDefault = (props) => {
  const { classes } = props;
  const textColor = props.inactive ? "textSecondary" : "textPrimary";
  return (
    <Card className={classes.card}>
      <CardContent>
      <Grid container>

      <Grid item xs>
        <Typography variant="h5" color={textColor}>
          { props.title }
        </Typography>
        <Typography variant="subtitle1" color={textColor} className={classes.subtitle}>
          <span role="img" aria-label="Teacher">👩‍🏫</span> { props.teacher }
        </Typography>
        <Typography variant="subtitle1" color={textColor} className={classes.subtitle}>
          <span role="img" aria-label="Room">🚪</span> { props.room }
        </Typography>
      </Grid>

      <Grid item xs container justify="flex-end" alignItems="center">
        { sideContent(props) }
      </Grid>
    </Grid>
      </CardContent>
    </Card>
  );
}

CardDefault.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardDefault);
