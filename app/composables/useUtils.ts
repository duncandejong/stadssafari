const toRad = (value: number): number => {
  return (value * Math.PI) / 180;
};

const calculateDistance = (
  lat01: number,
  lon01: number,
  lat02: number,
  lon02: number,
): number => {
  const R = 6371; // Radius of the earth in km
  const dLat = toRad(lat02 - lat01);
  const dLon = toRad(lon02 - lon01);
  const lat1 = toRad(lat01);
  const lat2 = toRad(lat02);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  // Distance in km
  return R * c;
};

const isPastDate = (date: Date): boolean => {
  const currentDate = new Date();
  return date < currentDate; // returns true if date is in the past
};

const getLanguageCode = () => {
  const defaultLang = "nl"; // Default language
  let userLang = navigator.language.split("-")[0].toLowerCase(); // Get language code in lowercase
  if (userLang.length === 2) {
    return userLang;
  }
  return defaultLang;
};

export const useUtils = () => {
  return {
    toRad,
    calculateDistance,
    isPastDate,
    getLanguageCode,
  };
};
