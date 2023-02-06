import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../containers/header/Header'

const Layout = (props) => {
  return (
    <>
      <Header state={props.state} addText={props.addText} />
      <Outlet state={props.state} addText={props.addText} />
    </>
  )
}

export default Layout