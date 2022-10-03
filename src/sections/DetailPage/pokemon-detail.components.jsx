import React, { Component } from 'react';
import { urlCorrector, upperCaseFirstChar } from '@shared/utils';
import style from './pokemon-detail.styles.scss';
import { fetchDetails } from '@shared/components/Fetcher/fetcher-details.component';
import PropTypes from 'prop-types';

export default class PokeDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pokemondetails: [],
      habilities: [],
      types: []
    }
  }

  componentDidMount () {
    fetchDetails(`${process.env.REACT_APP_API_BASE_ROUTE}/pokemon/${this.props.match.params.name}`)
    .then(response => 
      this.setState({
        pokemondetails: response.data,
        habilities: [...response.data.abilities],
        types: [...response.data.types]
      }))
    }

  render () {
    const avatar =  this.props.match.params.name === 'mr-mime' ? `https://projectpokemon.org/images/normal-sprite/${urlCorrector('mr.mime')}.gif` : this.props.match.params.name === 'nidoran-m' || this.props.match.params.name === 'nidoran-f' ? `https://projectpokemon.org/images/normal-sprite/${urlCorrector(this.props.match.params.name === 'nidoran-m'? 'nidoran_m' : 'nidoran_f')}.gif`:`https://projectpokemon.org/images/normal-sprite/${urlCorrector(this.props.match.params.name)}.gif`;
    const {pokemondetails, habilities, types} = this.state;
    const listItems = habilities.map((ability, id) => {
      return <li 
      key={id}> {upperCaseFirstChar(ability.ability.name)}
      </li>
    })

    const pokeType = types.map((type, id) => {
      return <span 
      key={id}> {upperCaseFirstChar(type.type.name).toLowerCase()}
      </span>
    })
    
    return (
      <div className={style.detailContainer}>
        <div className={style.detailCard}>
          <p 
          className={style.closeGoBack} 
          onClick={() => this.props.history.goBack()}>
          X
          </p>
          <div 
          className={style.imageName}
          >
            <img 
            src={avatar}
            />
              <p>
              {upperCaseFirstChar(this.props.match.params.name)}
              </p>
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

PokeDetail.propTypes = {
  name: PropTypes.string,
  fetchDetails: PropTypes.func,
  pokemondetails: PropTypes.array,
  habilities: PropTypes.array,
  types: PropTypes.array
}