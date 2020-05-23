import React from 'react';
import { CircularProgress } from '@material-ui/core';

const styles = {
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  },
};

const Loader = () => {
  return (
    <div style={styles.root}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
