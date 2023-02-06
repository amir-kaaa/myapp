import React from 'react'
import './header.css'
import { Navbar, Navbar2 } from '../../components/index'

const Header = (props) => {
  return (
    <>
      <Navbar arr1={props.state.arr1} addText={props.addText} arr3={props.state.arr3} />
      <Navbar2 arr2={props.state.arr2} />
    </>
  )
}
export default Header
