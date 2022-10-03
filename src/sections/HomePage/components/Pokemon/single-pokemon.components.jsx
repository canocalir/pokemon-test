import React from 'react';
import { urlCorrector, upperCaseFirstChar } from '@shared/utils';
import style from './single-pokemon.styles.scss';
import PropTypes from 'prop-types';


export default function PokeSingle (props) {
  const {pokemon} = props;
  const avatar = pokemon.name === 'mr-mime' ? `https://projectpokemon.org/images/normal-sprite/${urlCorrector('mr.mime')}.gif` : pokemon.name === 'nidoran-m' || pokemon.name === 'nidoran-f' ? `https://projectpokemon.org/images/normal-sprite/${urlCorrector(pokemon.name === 'nidoran-m'? 'nidoran_m' : 'nidoran_f')}.gif` : `https://projectpokemon.org/images/normal-sprite/${urlCorrector(pokemon.name)}.gif`

  return (
    <div className={style.flexcontainer}>
      <div className={style.pokelist}>
        <a href={`pokemon/${pokemon.name}`}>
          <div className={style.singlecard}>
            <div className={style.pokemonimage}>
            <img src={avatar} />
            </div>
            <div className={style.pokename}>
              <p>{upperCaseFirstChar(pokemon.name)}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

PokeSingle.propTypes = {
  name: PropTypes.string
}

