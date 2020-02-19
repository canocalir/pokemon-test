import Axios from 'axios';

const fetchPokemon = async () => {
    try{
    return await Axios.get(`${process.env.REACT_APP_API_BASE_ROUTE}/pokemon?limit=151`)
    .catch(err => console.log(err));
    }catch(error){
    console.log('Fetch Error:', error)
    }
}

export {fetchPokemon};