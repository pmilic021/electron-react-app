import React from 'react';

const electron = window.require ? window.require('electron') : null;

export function electronProvider(WrappedComponent) {
  const ElectronWrapperComponent = (props) => {
    return <WrappedComponent electron={electron} {...props} />
  }

  return ElectronWrapperComponent;
}

export default electronProvider;