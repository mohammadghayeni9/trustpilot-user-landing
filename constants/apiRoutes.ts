const BASE_URL = "https://backend.ifunction.ir/";
const makeApiUrl = (route: string): string => `${BASE_URL}${route}`;

export const API_ROUTES = {
  baseUrl: BASE_URL,
  articles: {
    categories: makeApiUrl("blogs/categories/"),
    articles: makeApiUrl("blogs/articles/"),
    searchArticles: makeApiUrl("blogs/articles/search/"),
  },
};
