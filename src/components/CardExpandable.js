import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import {
  Typography,
  Card,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';

import { ExpandMore } from '@material-ui/icons';

const styles = {
  card: {
    margin: 10,
  },
  content: {
    width: '100%',
  },
};

let CardExpandable = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon = { <ExpandMore /> }>
          <Typography variant="h5">
            { props.title }
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div className={classes.content}>
            { props.content }
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Card>
  );
}

CardExpandable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardExpandable);
