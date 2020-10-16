import fetchAPI from './fetchAPI';

function login(data) {
  let params = {
    login_type: data.loginType,
    nomor_handphone: data.nomorHandphone,
    email: data.email,
    password: data.password,
  };
  return fetchAPI({
    path: 'login.php',
    method: 'POST',
    params,
  });
}

function register(data) {
  let params = {
    register_type: data.registerType,
    nama: data.nama,
    nomor_handphone: data.nomorHandphone,
    email: data.email,
    password: data.password,
  };
  return fetchAPI({
    path: 'register.php',
    method: 'POST',
    params,
  });
}

export default {login, register};
