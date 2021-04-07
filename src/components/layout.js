import * as React from 'react';
import Nav from './nav';

import 'normalize.css'
import './layout.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      { children }
    </>
  )
}

export default Layout