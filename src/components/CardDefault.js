import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
  card: {
    margin: 10,
  },
  subtitle: {
    marginTop: 6,
  },
};

let sideContent = (props) => {
  if ( props.inactive ) { return ( <Icon>done_outline</Icon> ); }
  else if ( props.value ) {
    return (
      <CircularProgress 
        variant="static" 
        value={ props.value } 
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
