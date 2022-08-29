import React, { useEffect, useState } from 'react'
import RecipeApi from '../api/recipeApi'
import { useParams, Link } from 'react-router-dom'

import styled from 'styled-components'

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([])
  const { search } = useParams()

  useEffect(() => {
    searching()
  }, [search])

  const searching = async () => {
    const { results } = await RecipeApi.getSearched(search)
    setSearchedRecipes(results)
  }

  return (
    <Grid>
      {searchedRecipes.map(({ id, title, image }) => (
        <Card key={id}>
          <Link to={`/recipes/${id}`}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
          </Link>
        </Card>
      ))}
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none; 
  }
  h4 {
    padding: 1rem;
    text-align: center;
  }
`

export default Searched