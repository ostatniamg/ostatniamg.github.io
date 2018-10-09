import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Card from '@material-ui/core/Card';

const styles = {
  card: {
    margin: 10,
  },
};

let CardExpandable = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Icon>expand_more</Icon>}>
          <Typography variant="h5">
            { props.title }
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          { props.content }
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </Card>
  );
}

CardExpandable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardExpandable);
