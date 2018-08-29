import React from 'react';
import electronProvider from './electron-provider.hoc';

const Button = ({ electron, loading, label, link }) => (
  <button onClick={() => { electron ? electron.shell.openExternal(link) : window.open(link) }}>
    { loading ? <div className="btn-dual-ring"></div> : label}
  </button>
);

export default electronProvider(Button);