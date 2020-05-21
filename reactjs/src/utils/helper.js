export function getCookiesValue(key) {
  var equalities = document.cookie.split('; ');
  for (var i = 0; i < equalities.length; i++) {
    if (!equalities[i]) {
      continue;
    }

    var splitted = equalities[i].split('=');
    if (splitted.length !== 2) {
      continue;
    }

    if (decodeURIComponent(splitted[0]) === key) {
      if (splitted[1])
        return decodeURIComponent(splitted[1]);
    }
  }

  return null;
}

export function setCookiesValue(key, value) {
  if (!key) return;
  var cookieValue = encodeURIComponent(key) + '=';
  if (value)
    cookieValue = cookieValue + encodeURIComponent(value);
  document.cookie = cookieValue + "; path=/";
}

export const DOMAIN = "http://datnt908.ddns.net:5000"

export class SanPhamServiceApis {
  static async categories() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const apiEndpoint = `${DOMAIN}/SanPham/Categories`;

    try {
      const response = await fetch(apiEndpoint, requestOptions);
      switch (response.status) {
        case 200:
        case 500:
          return response;

        default:
          throw response;
      }
    } catch (error) {
      throw error;
    }
  }

  static async search(search, category) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const apiEndpoint = `${DOMAIN}/SanPham/Search`;
    const queryString = `?Search=${search}&Category=${category}`;

    try {
      const response = await fetch(`${apiEndpoint}${queryString}`, requestOptions)
      switch (response.status) {
        case 200:
        case 500:
          return response;

        default:
          throw response;
      }
    } catch (error) {
      throw error;
    }
  }
}

export class UsersServiceApis {
  static async login(username, password) {
    const crypto = require('crypto');
    const shaEncoder = crypto.createHash('sha1');
    shaEncoder.update(password);
    const sha1Pass = shaEncoder.digest('hex');

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify({ "username": username, "sha1Pass": sha1Pass });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const apiEndpoint = `${DOMAIN}/Users/Login`;

    try {
      const response = await fetch(apiEndpoint, requestOptions);
      switch (response.status) {
        case 200:
        case 401:
        case 404:
        case 500:
          return response;

        default:
          throw response;
      }
    } catch (error) {
      throw error;
    }
  }
}


