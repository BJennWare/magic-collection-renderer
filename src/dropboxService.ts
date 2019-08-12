import dropboxAccess from './utils/dropbox-fetch-axios';

const LOCALSTORAGE_KEY = 'api_key';

dropboxAccess.setToken(localStorage.getItem(LOCALSTORAGE_KEY) || '');

export const updateAccessToken = (token: string) => {
  localStorage.setItem(LOCALSTORAGE_KEY, token);
  dropboxAccess.setToken(localStorage.getItem(LOCALSTORAGE_KEY) || '');
};

export const getDropboxInstance = () => {
  dropboxAccess.setToken(localStorage.getItem(LOCALSTORAGE_KEY) || '');
  return dropboxAccess;
};
