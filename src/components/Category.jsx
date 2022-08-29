import React from 'react'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiNoodles, GiCroissant } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const Category = () => {
  return (
    <List>
      <SLink to='/cuisine/Italian'>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to='/cuisine/American'>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to='/cuisine/Thai'>
        <GiNoodles />
        <h4>Thai</h4>
      </SLink>
      <SLink to='/cuisine/French'>
        <GiCroissant />
        <h4>French</h4>
      </SLink>
    </List>
  )
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-left: 1rem;
  margin-right: 1rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(.8);
  h4 {
    color: #fff;
    font-size: .8rem;
  }
  svg {
    color: #fff;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
    svg {
      color: #fff;
    }
    h4 {
      color: #fff;
    }
  }
`

export default Category