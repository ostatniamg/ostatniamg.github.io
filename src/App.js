import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton className="button" color="inherit" aria-label="Menu">
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className="appbar-title">
              Strona główna
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default App;
