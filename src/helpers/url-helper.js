import { createBrowserHistory } from 'history';

export const accessUrlWithQuery = (url = '/', queryValue = '') => {
  const history = createBrowserHistory({ forceRefresh: true });

  history.push({
    pathname: url,
    search: `?q=${encodeURI(queryValue)}`,
  });
};
