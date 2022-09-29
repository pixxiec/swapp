import axiosClient from 'axios';

const getRequest = async (url, headers = {}, config = {}, timeout = 5000) => {
  try {
    const axiosConfig = {
      method: 'get',
      url,
      headers,
      timeout,
      ...config,
    };

    const response = await performRequest(axiosConfig);
    return response;
  } catch (error) {
    console.error(`Error executing get request for url ${url}: ${JSON.stringify(error)}`);
    throw error;
  }
};

const performRequest = (config) => {
  return new Promise((resolve, reject) => {
    axiosClient(config)
      .then((response) => {
        const retVal = {
          headers: response.headers,
          data: undefined,
        };
        if (response.data) {
          retVal.data = response.data;
        }
        resolve(retVal);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export {getRequest};
