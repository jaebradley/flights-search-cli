import { flag } from 'country-code-emoji';

const locationTypeEmojis = Object.freeze({
  airport: '🛫',
  'autonomous territory': '📍',
  city: '🌆',
  station: '📍',
  subdivision: '📍',
});

const formatLocationType = (type, code) => {
  if (type === 'country' && code) {
    return flag(code) || '📍';
  }

  return locationTypeEmojis[type] || '📍';
};

export default formatLocationType;
