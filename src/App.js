import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  title: {
    marginLeft: 16, /* 1em */
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className={this.props.classes.title} >
              Strona główna
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(App);
