import React from 'react'
import { Category, Search } from './components'
import { BrowserRouter, Link } from 'react-router-dom' 
import Pages from './pages/Pages'
import { GiKnifeFork } from 'react-icons/gi'

import styled from 'styled-components'

const App = () => {
  return (
    <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={`/`}>delicious</Logo>
      </Nav> 
      <Search />
      <Category />
      <Pages />
    </BrowserRouter>
  )
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
`

const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Lobster Two';
  svg {
    font-size: 1.5rem
  }
`

export default App
