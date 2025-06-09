export const setStorage = (key: string, value: any) => {
  return window.localStorage.setItem(key, JSON.stringify(value));
};
export const getStorage = (key: string) => {
  const value = window.localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return null;
};
export const removeStorage = (key: string) => {
  return window.localStorage.removeItem(key);
};
