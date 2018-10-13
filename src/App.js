import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import UINav from './components/UINav';
import CardDefault from './components/CardDefault';
import CardExpandable from './components/CardExpandable';

import Typography from '@material-ui/core/Typography';

const styles = {
  content: {
    margin: 20,
  },
};

class App extends Component {
  content = {
    Today: (
      <CardDefault
        title="CardDefault"
        teacher="Teacher"
        room="Room"
      ></CardDefault>
    ),
    Tomorrow: (
      <CardExpandable
        title="CardExpandable"
        content={
          <div>
            <CardDefault
              title="CardDefault"
              teacher="Teacher"
              room="Room"
            ></CardDefault>
            <CardDefault
              title="CardDefault"
              teacher="Teacher"
              room="Room"
              value={50}
            ></CardDefault>
            <CardDefault
              title="CardDefault"
              teacher="Teacher"
              room="Room"
              inactive
            ></CardDefault>
          </div>
        }
      ></CardExpandable>
    ),
    In2Days: (
      <div></div>
    ),
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="App">
        <UINav></UINav>
        <div className={classes.content}>
          <Typography variant="h4" gutterBottom>Today</Typography>
          { this.content.Today }
          <Typography variant="h4" gutterBottom>Tomorrow</Typography>
          { this.content.Tomorrow }
          <Typography variant="h4" gutterBottom>In 2 days</Typography>
          { this.content.In2Days }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
