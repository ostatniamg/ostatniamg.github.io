import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import Content from './Content';

import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  content: {
    margin: 20,
  },
};

class App extends Component {
  state = {
    open: false,
  };

  toggleDrawer = (value) => () => {
    this.setState({
      open: value,
    });
  };
  
  render() {
    const { classes } = this.props;
    const sideList = (
      <div>
        <List>
          <ListItem button onClick={() => { this.content.switchTo('main') }}>
            <ListItemIcon>
              <Icon>home</Icon>
            </ListItemIcon>
            <ListItemText primary="Strona głowna"/>
          </ListItem>
          <ListItem button onClick={() => { this.content.switchTo('plan') }}>
            <ListItemIcon>
              <Icon>calendar_today</Icon>
            </ListItemIcon>
            <ListItemText primary="Plan Lekcji"/>
          </ListItem>
          <ListItem button onClick={() => { this.content.switchTo('substitutions') }}>
            <ListItemIcon>
              <Icon>list</Icon>
            </ListItemIcon>
            <ListItemText primary="Zastępstwa"/>
          </ListItem>
          <ListItem button onClick={() => { this.content.switchTo('settings') }}>
            <ListItemIcon>
              <Icon>settings</Icon>
            </ListItemIcon>
            <ListItemText primary="Ustawienia"/>
          </ListItem>
        </List>
      </div>
    );
    return (
      <div className="App">
        <div className={classes.nav}>
          <AppBar position="sticky">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer(true)}>
                <Icon>menu</Icon>
              </IconButton>
              <Typography variant="h6" color="inherit" className={this.props.classes.title} >
                Strona główna
              </Typography>
            </Toolbar>
          </AppBar>

          <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
              {sideList}
            </div>
          </Drawer>
        </div>

        <div className={classes.content}>
          <Content ref={instance => { this.content = instance }}></Content>
        </div>
      </div>
    );
  };
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
