import {getRequest} from '../helpers/axios_client.js';

const getPeople = async (page = 1) => {
  try {
    let data = await getRequest(`${process.env.SWAPI}${page}`);
    return data.data?.results;
  } catch (error) {
    console.error(`Error getting data for page ${page}: ${JSON.stringify(error)}`);
    throw error;
  }
};

export {getPeople};