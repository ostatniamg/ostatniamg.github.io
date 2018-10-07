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
  subheading: {
    marginTop: 6,
  },
};

let CardInactive = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="headline" color="textSecondary">
          { props.title }
        </Typography>
        <Typography variant="subheading" color="textSecondary" className={classes.subheading}>
          <span role="img" aria-label="Teacher">👩‍🏫</span> { props.teacher }
        </Typography>
        <Typography variant="subheading" color="textSecondary" className={classes.subheading}>
          <span role="img" aria-label="Room">🚪</span> { props.room }
        </Typography>
      </CardContent>
    </Card>
  );
}

CardInactive.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardInactive);
