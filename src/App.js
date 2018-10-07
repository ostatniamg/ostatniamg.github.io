import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import CardActive from './components/CardActive';
import CardInactive from './components/CardInactive';
import CardProgress from './components/CardProgress';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const styles = {
  title: {
    marginLeft: 16, /* 1em */
  },
  content: {
    margin: 20,
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="sticky">
          <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
              <Icon>menu</Icon>
            </IconButton>
            <Typography variant="title" color="inherit" className={this.props.classes.title} >
              Strona główna
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={this.props.classes.content}>

          <CardActive
            title="CardActive"
            teacher="Teacher"
            room="Room"
          ></CardActive>

          <CardInactive
            title="CardInactive"
            teacher="Teacher"
            room="Room"
          ></CardInactive>

          <CardProgress
            title="CardProgress"
            teacher="Teacher"
            room="Room"
            value={75}
          ></CardProgress>

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
