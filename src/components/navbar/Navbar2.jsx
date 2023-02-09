import React, { useState } from 'react'
import styled from 'styled-components'

const Navbar2 = (props) => {
    let arr2 = props.arr2.map(item => <Item key={item}>{item}</Item>);

    const [nb2, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= (window.innerHeight * 8 / 10)) {
            setNavbar(true)
        }
        else {
            setNavbar(false)
        }
    }
    window.addEventListener('scroll', changeBackground);
    return (

        <Nav className={nb2 ? 'nb2 small' : 'nb2 big'}>
            <List>
                {arr2}
            </List>
        </Nav>
        
    )
}

export default Navbar2


// components

const Nav = styled.section`
    line-height: 1.6;
    /* font-family: 'Cormorant Garamond', serif; */
    font-weight: 500;
    font-size: 1.4rem;
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 44px; 
    justify-content: center;
    /* display: flex; */
    
    @media screen and (max-width: 1000px) {
        display: none;
    }
`
const List = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 0;
    box-sizing: border-box;
`
const Item = styled.li`
    font-size: 1.3rem;
    margin: 0 25px 0 25px;
    box-sizing: border-box;
    cursor: pointer;
    
    &:hover {
        color: #ccc
    }
`