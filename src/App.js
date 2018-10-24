import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  Typography,
  AppBar,
  Toolbar,
  Drawer,
  MenuList, 
  MenuItem,
  IconButton
} from '@material-ui/core';

import {
  Menu 
} from '@material-ui/icons';

import CardDefault from './components/CardDefault';
import CardExpandable from './components/CardExpandable';

const styles = {
};

class App extends Component {

  state = { 
    active: false,
  };
  drawerItems = (
    <MenuList>
        <MenuItem>Strona główna</MenuItem>
        <MenuItem>Plan</MenuItem>
        <MenuItem>Zastępstwa</MenuItem>
        <MenuItem>Ustawienia</MenuItem>
      </MenuList>
  );
  drawerToggle = (open) => () => {
    this.setState({
      active: open,
    });
  };

  render() {
    const { classes } = this.props;
    const title = "Strona główna";

    return (
      <div className="App">

        <AppBar position="sticky">
          <Toolbar>
            <IconButton onClick={this.drawerToggle(true)} color="inherit" aria-label="Menu">
              <Menu />
            </IconButton>
            <Typography variant="h6" color="inherit">{ title }</Typography>
          </Toolbar>
        </AppBar>

        <Drawer open={this.state.active} onClose={this.drawerToggle(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.drawerToggle(false)}
            onKeyDown={this.drawerToggle(false)}
          >
          { this.drawerItems }
          </div>
        </Drawer>

        <CardDefault
          title="CardExpandable"
          teacher="Teacher"
          room="Room"
          inactive
        />
        <CardExpandable
          title="CardExpandable"
          content = {
            <div>Works!</div>
          }
        />
      </div>
    );
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
