const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

const API_BASE_URL = isLocalhost
? "http://localhost:8080"
    : "https://thorough-fascination-production-6e0c.up.railway.app"

export default API_BASE_URL;