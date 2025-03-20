const BASE_URL = "https://backend-test.asanscrape.com/";
const makeApiUrl = (route: string): string => `${BASE_URL}${route}`;

export const API_ROUTES = {
  baseUrl: BASE_URL,
  home: {
    robots: makeApiUrl("robots/robots/"),
    datasets: makeApiUrl("datasets/latest/"),
  },
  faq: {
    robots: makeApiUrl("contactus/faqs/section/robotsmodel/"),
    datasets: makeApiUrl("contactus/faqs/section/datasetmodel/"),
    robot: makeApiUrl("contactus/faqs/robotsmodel/"),
    dataset: makeApiUrl("contactus/faqs/datasetmodel/"),
    subscription: makeApiUrl("contactus/faqs/section/plan/"),
  },
  robots: {
    categories: makeApiUrl("robots/robots-categories/"),
    robots: makeApiUrl("robots/robots/"),
    robotsSearch: makeApiUrl("robots/robots-search/"),
    robotDetail: makeApiUrl("robots/detail/"),
  },
  datasets: {
    categories: makeApiUrl("datasets/categories/"),
    datasets: makeApiUrl("datasets/search/"),
    datasetDetail: makeApiUrl("datasets/"),
  },
  articles: {
    categories: makeApiUrl("blogs/categories/"),
    articles: makeApiUrl("blogs/articles/"),
    searchArticles: makeApiUrl("blogs/articles/search/"),
  },
  contactUs: {
    postForm: makeApiUrl("contactus/contact-us/"),
  },
  subscription: {
    plans: makeApiUrl("plan/plans/"),
    robotListPrice: makeApiUrl("/robots/list-robots-price/"),
  },
};
