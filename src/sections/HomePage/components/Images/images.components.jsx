import React from 'react';
import style from './images.styles.scss';
import ImmflyLogo from '@assets/images/immfly.png';
import PokemonLogo from '@assets/images/pokemon.png';

const Images = () => (
  <div 
  className={style.logoimage}
  >
    <img 
    src={ImmflyLogo} 
    />
    <img 
    src={PokemonLogo} 
    />
  </div>
)

export default Images;
