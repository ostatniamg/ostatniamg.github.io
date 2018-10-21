import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import CardDefault from './components/CardDefault';
import CardExpandable from './components/CardExpandable';

class Content extends Component {
  view = 'main';
  switchTo(newView) {
    this.view = newView;
  };
  contentMain = {
    Today: (
      <Typography variant="h4" gutterBottom>Dzisiaj</Typography>
    ),
    Tomorrow: (
      <Typography variant="h4" gutterBottom>Jutro</Typography>
    ),
    In2Days: (
      <Typography variant="h4" gutterBottom>Za 2 Dni</Typography>
    ),
  };
  content = {
    main: (
      <div>
        { this.contentMain.Today }
        { this.contentMain.Tomorrow }
        { this.contentMain.In2Days }
      </div>
    ),
    plan: (
      <div></div>
    ),

    substitutions: (
      <div></div>
    ),

    settings: (
      <div></div>
    ),
  };
  render() {
    return (
      <div>
        { this.content[this.view] }
      </div>
    );
  };
};

export default Content;