import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    margin: 10,
  },
  subtitle: {
    marginTop: 6,
  },
};

let CardActive = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5">
          { props.title }
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          <span role="img" aria-label="Teacher">👩‍🏫</span> { props.teacher }
        </Typography>
        <Typography variant="subtitle1" className={classes.subtitle}>
          <span role="img" aria-label="Room">🚪</span> { props.room }
        </Typography>
      </CardContent>
    </Card>
  );
}

CardActive.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardActive);
