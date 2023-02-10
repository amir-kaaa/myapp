import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../containers/header/Header'

const Layout = (props) => {
  return (
    <>
      <Header state={props.state} dispatch={props.dispatch} />
      <Outlet state={props.state} dispatch={props.dispatch} />
    </>
  )
}

export default Layout