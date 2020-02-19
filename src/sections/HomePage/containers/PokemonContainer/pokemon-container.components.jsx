import React, { Component } from 'react'
import Loader from '@shared/components/Loader'
import PokeSingle from '../../components/Pokemon/single-pokemon.components'
import Titles from '../../components/Title/title.components'
import style from '../../components/Pokemon/single-pokemon.styles.scss'
import { fetchPokemon } from '@shared/components/Fetcher/fetcher.components'
import PropTypes from 'prop-types';

export default class PokeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isFetched: false,
      isLoading: false,
      pokemons: []
    }
  }

  componentDidMount() {
    fetchPokemon()
    .then(result => this.setState({
      isFetched: true,
      isLoading: true,
      pokemons: [...result.data.results]
    }))
  }

  componentWillMount () {
    this.setState({
      isLoading: true
    })
  }

  render () {
    const {isFetched, isLoading, pokemons} = this.state;

    let content;
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

PokeContainer.propTypes = {
  isLoading: PropTypes.bool,
  isFetched: PropTypes.bool,
  pokemons: PropTypes.array
}