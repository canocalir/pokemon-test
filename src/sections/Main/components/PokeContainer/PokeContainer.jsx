import React, { Component } from 'react'

import Loader from '@shared/components/Loader'
import PokeSingle from '../PokeSingle/PokeSingle'
import Titles from '../Titles/Titles'

import style from '../PokeSingle/PokeSingle.scss'

export default class PokeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFetched: false,
      isLoading: false,
      pokemons: []
    }
  }

  componentWillMount () {
    this.setState({
      isLoading: true
    })

    window.fetch(`${process.env.REACT_APP_API_BASE_ROUTE}/pokemon?limit=151`)
      .then(res => res.json())
      .then(response => {
        this.setState({
          isFetched: true,
          isLoading: true,
          pokemons: response.results
        })
      })
  }

  render () {
    const {isFetched, isLoading, pokemons} = this.state

    let content

    if (isFetched) {
      content =
        <div className={style.pokelist}>

          {pokemons.map((pokemon, index) =>
            <PokeSingle key={pokemon.name}
              id={index + 1} pokemon={pokemon} />
          )}

        </div>
    } else if (isLoading && !isFetched) {
      content = <div><Loader /></div>
    } else {
      content = <div />
    }
    return (

      <div>
        <Titles
          generationTitle={'Generation 1'}
          pokemonCount={`${pokemons.length} Pokemon`}
        />
        {content}
      </div>
    )
  }
}
