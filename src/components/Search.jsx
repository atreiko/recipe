import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

import styled from 'styled-components'

const Search = () => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const submitHandler = e => {
    e.preventDefault()
    navigate('/searched/' + input)
  }

  return (
    <Form onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input 
          onChange={(e) => setInput(e.target.value)} 
          type='text' 
          value={input} 
        />
      </div>
    </Form>
  )
}

const Form = styled.form`
  margin: 0 15rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    width: 100%;
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: #fff;
    border-radius: 1rem;
    padding: 1rem 3rem;
    outline: none;
  }
  svg {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(100%, -50%);
    color: #fff;
  }
`

export default Search