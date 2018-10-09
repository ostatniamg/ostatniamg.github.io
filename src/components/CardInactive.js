import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';

const styles = {
  card: {
    margin: 10,
  },
  subtitle: {
    marginTop: 6,
  },
};

let CardInactive = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
      <Grid container>

      <Grid item xs>
        <Typography variant="h5" color="textSecondary">
          { props.title }
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" className={classes.subtitle}>
          <span role="img" aria-label="Teacher">👩‍🏫</span> { props.teacher }
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" className={classes.subtitle}>
          <span role="img" aria-label="Room">🚪</span> { props.room }
        </Typography>
      </Grid>

      <Grid item xs container justify="flex-end" alignItems="center">
        <Icon>done_outline</Icon>
      </Grid>
    </Grid>
      </CardContent>
    </Card>
  );
}

CardInactive.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardInactive);
