export const chunk = (arr, chunkSize, cache = []) => {
  const tmp = [...arr];
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

export const setLocalStorage = (key, data, json = true) => {
  const parsedData = json ? JSON.stringify(data) : data;
  window.localStorage.setItem(key, parsedData);
};

export const getLocalStorage = (key, json = true) => {
  return json
    ? JSON.parse(localStorage.getItem(key))
    : localStorage.getItem(key);
};
