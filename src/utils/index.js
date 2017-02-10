import axios from 'axios';

const base = `appSZ79o51JzNr3HP`;
const key = `keyHa35J3bfG5f5ok`;
const airtable = `https://api.airtable.com/v0/${base}/Projects?api_key=${key}`;

function listProjects() {
  return axios.get(airtable)
        .then( (res) => res.data.records )
        .catch( (err) => err );
}

export default listProjects;
