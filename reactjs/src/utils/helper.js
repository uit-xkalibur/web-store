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

    const apiEndpoint = "http://localhost:5000/Users/Login";

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
