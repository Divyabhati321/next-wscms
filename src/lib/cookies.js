// utils/cookies.js

export function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

export function setCookie(name, value, days, domain) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = `; expires=${date.toUTCString()}`;
    }
    const domainString = domain ? `; domain=${domain}` : "";
    document.cookie = `${name}=${(value || "")}${expires}${domainString}; path=/`;
    // document.cookie = `${name}=${(value || "")}${expires}; path=/`;
}

export function getCookieSize(name) {
    const cookieValue = getCookie(name);
    return encodeURIComponent(name).length + (cookieValue ? encodeURIComponent(cookieValue).length : 0);
}
