import React from 'react';

const classes = require('./helloComponentStyles.scss');

export const HelloComponent = () => {

  return (
    <div className={classes.box}>
      <div className={classes.inner}>
        <span>Hello World</span>
      </div>
      <div className={classes.inner}>
        <span>Hello World</span>
      </div>
    </div>
  );

};