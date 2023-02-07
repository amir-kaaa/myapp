import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const Navbar = (props) => {

  const [nb, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= (window.innerHeight * 8 / 10)) {
      setNavbar(true)
    }
    else {
      setNavbar(false)
    }
  }
  // window.addEventListener('scroll', changeBackground);
  React.useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground)
  })

  return (
    <Nav className={nb ? 'nb small' : 'nb big'}>
      <Logo1 to='/'>{props.arr1.logo1}</Logo1>
      <Logo2 to='/'>{props.arr1.logo2}</Logo2>

      <Menu>
        <ItemSubMenu to='/Studentam'>{props.arr1.studentam}</ItemSubMenu>
        <ItemSubMenu to='/Abiturientam'>{props.arr1.abiturientam}</ItemSubMenu>
        <Item to='/Rabotnikam'>{props.arr1.rabotnikam}</Item>
        <Item to='/Posetitelyam'>{props.arr1.posetitelyam}</Item>
        <Button1>Вход</Button1>
        <Button2>Регистрация</Button2>
      </Menu>

    </Nav>
  )
}

export default Navbar



// COMPONENTS

const Nav = styled.section`
  background: #1d2b60;
  color: white;
  width: 100%;
  position: fixed;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  flex-wrap: wrap;
  
  @media screen and (min-width: 1000px) {
    background: linear-gradient(0deg, rgba(0, 0, 0, .7), #000);
  }
  @media screen and (min-width: 1700px) {
    justify-content: space-around;
    transition: all;
  }
`
const Logo1 = styled(Link)`
  font-size: 1.3rem;
  text-decoration: none;
  /* font-family: 'Cormorant Garamond', serif; */
  color: white;
  align-items: center;
  order: -2;
  padding: 10px;
  
  @media screen and (min-width: 1000px) {
    flex: 4;
    display: none;
    padding-left: 20px;
  }
`
const Logo2 = styled(Link)`
  font-size: 1.3rem;
  /* font-family: 'Cormorant Garamond', serif; */
  font-weight: 400;
  color: white;
  order: -2;
  padding: 10px;
  padding-left: 20px;
  display: none;

  @media screen and (min-width: 1000px) {
    display: block;
  }
  :hover {
        color: #ccc
    }
`
const Menu = styled.div`
  font-family: 'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-weight: 340;
  font-size: .9rem;
  color: rgb(238, 238, 238);
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (min-width: 1000px) {
    width: auto;
  }
`
const Item = styled(Link)`
  display: none;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 999px) {
    /* display: block; */
  }
  @media screen and (min-width: 1000px) {
    width: auto;
    display: block;
    padding: 0 15px 0 15px;
    align-items: center;
  }
  &:hover {
        color: #ccc
    }
  /* &.active {
    border-bottom: 3px solid #fff;
  } */
`
const ItemSubMenu = styled(Link)`
  list-style: none;
  text-align: center;
  width: 100%;
  display: none;

  @media screen and (max-width: 999px) {
    /* display: block; */
  }
  @media screen and (min-width: 1000px) {
    width: auto;
    display: block;
    padding: 0 15px 0 15px;
    align-items: center;
  }
  &:hover {
        color: #ccc
    }
`
const Button1 = styled.button`
  order: -1;
  text-align: center;
  width: 100%;
  border-top: #fff 1px solid;
  padding: 20px;
  display: none;
  color: #111;
  font-weight: 400;

  /* @media screen and (max-width: 999px) {
    display: block;
  } */
  @media screen and (min-width: 1000px) {
    width: auto;
    display: block;
    border: none;
    order: 2;
    padding: 10px 15px;
    margin-left: 15px;
    align-items: center;
    border-radius: 10px;
    background: #fff;
  }
`
const Button2 = styled.div`
  order: -1;
  text-align: center;
  width: 100%;
  padding: 15px;
  padding-bottom: 20px;
  display: none;
  font-weight: 400;
  margin-left: 10px;

  /* @media screen and (max-width: 999px) {
    display: block;
  } */
  @media screen and (min-width: 1000px) {
    width: auto;
    display: block;
    padding: 10px 15px;
    order: 2;
    border-radius: 10px;
    background: #1d2b60;
  }
`