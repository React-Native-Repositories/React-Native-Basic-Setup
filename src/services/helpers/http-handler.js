import {authHeader} from './auth-header';
import axios from 'axios';
import {getToken, removeToken} from '@utils/storage-helpers';
import {getValue} from '@utils/lodash';
import Toast from 'react-native-toast-message';

export const get = async url => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${await getToken('access_token')}`,
      source: 'accenture.com',
    },
  };
  return axios
    .get(`${url}`, requestOptions)
    .then(data => {
      return data.data;
    })
    .catch(error => {
       return handleErrorResponse(error);
    });
};

export const put = async (url, payload) => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${await getToken('access_token')}`,
      source: 'accenture.com',
    },
  };
  return axios
    .put(`${url}`, payload, requestOptions)
    .then(data => {
      return data;
    })
    .catch(error => {
      handleErrorResponse(error);
    });
};

export const post = async (url, payload) => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${await getToken('access_token')}`,
      source: 'accenture.com',
    },
  };
  return axios
    .post(`${url}`, payload, requestOptions)
    .then(data => {
      return data;
    })
    .catch(error => {
      handleErrorResponse(error);
    });
};

export const postFileUpload = async (url, payload) => {
  const requestOptions = {
    headers: {
      Authorization: 'Bearer ' + (await getToken('access_token')),
      'Content-Type': 'multipart/form-data',
      source: 'accenture.com',
    },
  };
  return axios
    .post(`${url}`, payload, requestOptions)
    .then(data => {
      return data;
    })
    .catch(error => {
      handleErrorResponse(error);
    });
};

export const patchFileUpload = async (url, payload) => {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + (await getToken('access_token')),
      source: 'accenture.com',
    },
    body: payload,
  };

  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
};

export const patch = async(url, payload) => {
  const requestOptions = {
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + (await getToken('access_token')),
      source: 'accenture.com'
    },
  };
  return axios
  .patch(`${url}`, payload, requestOptions)
  .then(data => {
    return data;
  })
  .catch(error => {
    handleErrorResponse(error);
  });
};

export const Delete = async(url) => {
    const requestOptions = {
      headers: {
        Authorization: 'Bearer ' + (await getToken('access_token')),
        'Content-Type': 'multipart/form-data',
        source: 'accenture.com',
      },
    };
    return axios
      .delete(`${url}`, requestOptions)
      .then(data => {
        return data;
      })
      .catch(error => {
        handleErrorResponse(error);
      });
};

export const getPayload = (url, payload) => {
  const requestOptions = {
    method: 'GET',
    headers: authHeader(url),
    body: JSON.stringify(payload),
  };
  return fetch(`${url}`, requestOptions)
    .then(handleResponse)
    .then(data => {
      return data;
    });
};

function logout() {
  localStorage.clear();
}

async function handleResponse(resp) {
  let response = JSON.stringify(resp);
  const data = getValue(resp, `data`, {});
  if (!response.ok) {
    if (response.status === 401) {
      await removeToken('user');
      await removeToken('access_token');
      await removeToken('refresh_token');
      // props.navigation.navigate('Intro');
    }
    const error = (data && data.message) || response.statusText;
    // Alert.alert(error);
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: data.message,
    });
    return Promise.reject(error);
  }
  return resp;
}

async function handleErrorResponse(error) {
  if (getValue(error,`response.data.statusCode`,'') == 401) {
    await removeToken('user');
    await removeToken('access_token');
    await removeToken('refresh_token');
    // props.navigation.navigate('Intro');
  } else {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: getValue(error, `response.data.message`, ''),
    });
  }
  return getValue(error,`response.data`,{})
}
