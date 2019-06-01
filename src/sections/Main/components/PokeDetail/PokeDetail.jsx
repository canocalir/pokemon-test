import React, { Component } from 'react'

import { urlCorrector, upperCaseFirstChar } from '@shared/utils'

import style from './PokeDetail.scss'

export default class PokeDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemondetails: [],
      habilities: [],
      types: []
    }
  }

  componentWillMount () {
    window.fetch(`${process.env.REACT_APP_API_BASE_ROUTE}/pokemon/${this.props.match.params.name}`)
      .then(res => res.json())
      .then(response => {
        this.setState({
          pokemondetails: response,
          habilities: response.abilities,
          types: response.types
        })
      })
  }

  render () {
    const avatar = `http://pokestadium.com/sprites/xy/${urlCorrector(this.props.match.params.name)}.gif`
    const {pokemondetails, habilities, types} = this.state

    const listItems = habilities.map((ability, id) => {
      return <li key={id}> {upperCaseFirstChar(ability.ability.name)}</li>
    })

    const pokeType = types.map((type, id) => {
      return <span key={id}> {upperCaseFirstChar(type.type.name).toLowerCase()}</span>
    })

    return (
      <div className={style.detailContainer}>

        <div className={style.detailCard}>
          <p className={style.closeGoBack} onClick={() => this.props.history.goBack()}>X</p>

          <div className={style.imageName}>
            <img src={avatar} />
            <p>{upperCaseFirstChar(this.props.match.params.name)}</p>
          </div>

          <div className={style.detailTexts}>
            <p><strong>ID: </strong>{pokemondetails.id}</p>
            <p><strong>Type: </strong>{pokeType.slice(0, 1)} </p>
            <p><strong>Height: </strong>{pokemondetails.height}</p>
            <p><strong>Habilities: </strong></p>
            <ul>
              {listItems}
            </ul>
          </div>
        </div>
      </div>
    )
  }
};
