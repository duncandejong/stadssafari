export const useStorage = () => {
  const isClient = process.client;

  const setJsonData = (key: string, value: any): void => {
    if (isClient) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const getJsonData = (key: string): any | null => {
    if (isClient) {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
    return null;
  };

  const exist = (key: string) => {
    return isClient ? !!localStorage.getItem(key) : false;
  };

  const clearStorage = (keys: string | string[]): void => {
    if (isClient) {
      const keysArray = Array.isArray(keys) ? keys : [keys];
      keysArray.forEach((key) => localStorage.removeItem(key));
    }
  };

  return { setJsonData, getJsonData, exist, clearStorage };
};
