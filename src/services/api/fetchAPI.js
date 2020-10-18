export default async function fetchAPI({path, method, params}) {
  const host = 'https://mykost-admin.000webhostapp.com/api/';

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const request = {
    method,
    headers,
  };

  if (params) {
    request.body = JSON.stringify(params);
  }

  return fetch(`${host}${path}`, request)
    .then((response) => {
      if (response.status === 200 || response.status === 201) {
        return response.json().then((value) => {
          return {
            data: value.data,
            message: value.message,
          };
        });
      } else {
        return response.json().then((value) => {
          return {
            message: value.message,
          };
        });
      }
    })
    .catch((err) => {
      return {
        code: 503,
        data: err,
        message: 'Service Unavailable',
      };
    });
}
