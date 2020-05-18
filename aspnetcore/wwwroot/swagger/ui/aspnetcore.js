var aspnetcore = aspnetcore || {};
(function () {
    //Change this when deploy on server
    aspnetcore.domain = "http://localhost:5000"
    aspnetcore.loginUserAccount = function (username, sha1Pass, closeCallback) {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ "username": username, "sha1Pass": sha1Pass });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch(`${aspnetcore.domain}/Users/Login`, requestOptions)
            .then(response => response.json())
            .then(JSON => {
                if (null !== JSON.result) {
                    console.log(JSON.result.token);
                    aspnetcore.setToken(JSON.result.token);
                    closeCallback();
                }
                else
                    alert(JSON.error.detail);
            })
            .catch(error => console.log('error', error));
    };

    aspnetcore.setToken = function (token) {
        var cookieValue = encodeURIComponent("userToken") + '=';
        if (token) {
            cookieValue = cookieValue + encodeURIComponent(token);
        }

        document.cookie = cookieValue;
    }

    aspnetcore.getToken = function () {
        return aspnetcore.getCookieValue("userToken");
    }

    aspnetcore.getCookieValue = function (key) {
        var equalities = document.cookie.split('; ');
        for (var i = 0; i < equalities.length; i++) {
            if (!equalities[i]) {
                continue;
            }

            var splitted = equalities[i].split('=');
            if (splitted.length != 2) {
                continue;
            }

            if (decodeURIComponent(splitted[0]) === key) {
                return decodeURIComponent(splitted[1] || '');
            }
        }

        return null;
    };

})();


