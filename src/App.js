import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';
import { BrowserRouter, Link, Route } from 'react-router-dom';

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

import {
  Home,
  Plan,
  Substitutions,
  Settings
} from './content';

const styles = {
  content: {
    margin: 20,
  },
};

class App extends Component {

  state = { 
    active: false,
  };
  drawerItems = (
    <MenuList>
        <MenuItem component={Link} to='/'>Strona główna</MenuItem>
        <MenuItem component={Link} to='/Plan'>Plan</MenuItem>
        <MenuItem component={Link} to='/Substitutions'>Zastępstwa</MenuItem>
        <MenuItem component={Link} to='/Settings'>Ustawienia</MenuItem>
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
      <BrowserRouter>
        <Fragment>

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

          <div className={ classes.content }>
            <Route exact path='/' component={ Home } />
            <Route path='/Plan' component={ Plan } />
            <Route path='/Substitutions' component={ Substitutions } />
            <Route path='/Settings' component={ Settings } />
          </div>
        </Fragment>
      </BrowserRouter>
    );
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
