export const makeHash = (queryString) => {
  return btoa(queryString);
};

export const getQueryObject = (hash) => {
  try {
    const queryString = atob(hash);
    return JSON.parse(
      '{"' +
        decodeURI(queryString)
          .replace(/"/g, '\\"')
          .replace(/&/g, '","')
          .replace(/=/g, '":"') +
        '"}'
    );
  } catch (error) {
    return {};
  }
};
