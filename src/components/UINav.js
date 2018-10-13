import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styles = {
  title: {
    marginLeft: 16,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};


class UINav extends React.Component {
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
      <div className={classes.list}>
        <List>
          <ListItem>
            <ListItemText primary="Item"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Item"/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Item"/>
          </ListItem>
        </List>
      </div>
    );

    return (
      <div>
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
    );
  }
}

UINav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UINav);