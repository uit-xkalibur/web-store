import { SanPhamServiceApis } from './apisCalling';

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

export function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export async function getCategories() {
    try {
        const response = await SanPhamServiceApis.categories();
        const json = await response.json();
        switch (response.status) {
            case 200:
                return json.result;

            default:
                Notification.alert(`Error ${response.status}`, json.error.detail, "danger")
                break;
        }

    } catch (error) {
        Notification.alert(`Error ${error.status}`, error.title, "danger");
    }
}

export async function getProducts(search, category) {
    try {
        const response = await SanPhamServiceApis.search(search, category);
        const json = await response.json();
        switch (response.status) {
            case 200:
                return json.result;

            default:
                Notification.alert(`Error ${response.status}`, json.error.detail, "danger")
                break;
        }

    } catch (error) {
        Notification.alert(`Error ${error.status}`, error.title, "danger");
    }
}
