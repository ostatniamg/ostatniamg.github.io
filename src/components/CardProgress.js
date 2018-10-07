import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';

const styles = {
  card: {
    margin: 10,
  },
  subheading: {
    marginTop: 6,
  },
};

let CardProgress = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container>

          <Grid item xs>
            <Typography variant="headline">
              { props.title }
            </Typography>
            <Typography variant="subheading" className={classes.subheading}>
              <span role="img" aria-label="Teacher">👩‍🏫</span> { props.teacher }
            </Typography>
            <Typography variant="subheading" className={classes.subheading}>
              <span role="img" aria-label="Room">🚪</span> { props.room }
            </Typography>
          </Grid>

          <Grid item xs container justify="flex-end" alignItems="center">
              <CircularProgress 
              variant="static" 
              value={ props.value } 
              />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

CardProgress.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardProgress);
