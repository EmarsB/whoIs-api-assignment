const WHO_IS_API = import.meta.env.VITE_WHO_IS_API_KEY;
const WHO_IS_BASE_URL = `https://www.whoisxmlapi.com/whoisserver/WhoisService?apiKey=${WHO_IS_API}&outputFormat=JSON`;

export { WHO_IS_BASE_URL };
