import React, { Fragment } from 'react';
import {
  CardDefault,
  CardExpandable
} from '../components';

let Home = () => {
  return (
    <Fragment>

      <CardDefault
        title="CardDefault"
        teacher="Teacher"
        room="Room"
        progress={50}
      />

      <CardExpandable
        title="CardExpandable"
        content={
          <div>
            Content
          </div>
        }
      />
    </Fragment>
  );
};
export default Home;