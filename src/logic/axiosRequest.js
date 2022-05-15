import axios from 'axios';

axios.interceptors.request.use(function (config) {
 
    config.metadata = { startTime: new Date()}
    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (response) {
 
    response.config.metadata.endTime = new Date()
    response.duration = response.config.metadata.endTime - response.config.metadata.startTime
    return response;
  }, function (error) {
    error.config.metadata.endTime = new Date();
    error.duration = error.config.metadata.endTime - error.config.metadata.startTime;
    return Promise.reject(error);
  });


async function axiosRequest(config){
    let data = await axios(config)
    let size = getSizeInBytes(data.data);
    data.size = size;
       
    
    return {
        headers: data.headers,
        json: data.data,
        responseMetaInfo: {
            status: data.status,
            duration: data.duration,
            size: data.size
        }
    }
}

const getSizeInBytes = obj => {
    let str = null;
    if (typeof obj === 'string') {
      // If obj is a string, then use it
      str = obj;
    } else {
      // Else, make obj into a string
      str = JSON.stringify(obj);
    }
    // Get the length of the Uint8Array
    const bytes = new TextEncoder().encode(str).length;
    return bytes;
  };


export default axiosRequest