import Axios from 'axios';
import PropTypes from 'prop-types';

async function fetchDetails(url) {
    try{
    return await Axios.get(url)
    .catch(err => console.log(err));
    }catch(error){
    console.log('Fetch Error:', error)
    }
}
export {fetchDetails};

fetchDetails.propTypes = {
    url: PropTypes.string
}