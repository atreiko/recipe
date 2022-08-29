import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RecipeApi from '../api/recipeApi'

import styled from 'styled-components'

const Recipe = () => {
  const [details, setDetails] = useState({})
  const [activeTab, setActiveTab] = useState('instructions')
  const { id } = useParams()

  useEffect(() => {
    getDetails()
  }, [id])

  const getDetails = async () => {
    const results = await RecipeApi.getDetails(id)
    setDetails(results)
  }

  const { title, image, summary, instructions, extendedIngredients } = details

  return (
    <DetailsWrapper>
      <div>
        <h2>{title}</h2>
        <img src={image} alt={title} />
      </div>
      <Info>
        <Button 
          className={activeTab === 'instructions' ? 'active' : ''} 
          onClick={() => setActiveTab('instructions')}
        >
          Instructions
        </Button>
        <Button 
          className={activeTab === 'ingredients' ? 'active' : ''} 
          onClick={() => setActiveTab('ingredients')}
        >
          Ingredients
        </Button>
        {activeTab === 'instructions' && (
        <div>
          <h3 dangerouslySetInnerHTML={{ __html: summary }} />
          <h3 dangerouslySetInnerHTML={{ __html: instructions }} />
        </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
            {extendedIngredients.map(({ id, original }) => (
              <li key={id}>{original}</li>
            ))}
          </ul>
        )}

      </Info>
    </DetailsWrapper>
  )

}

const DetailsWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }
  h2 {
    margin-bottom: 2rem;
  }
  h3 {
    font-size: 1.2rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1rem;
    line-height: 2.5rem;
  }
`

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: #fff;
  border: 2px solid #000;
  margin-right: 2rem;
  font-weight: 600;
`

const Info = styled.div`
  margin-left: 10rem;
`

export default Recipe