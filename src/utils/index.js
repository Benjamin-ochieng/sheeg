/* eslint-disable default-param-last */

import freeze from 'deep-freeze';
import produce from 'immer';

export const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const urlBuilder = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    if (obj[key] && !(key === 'status' && obj[key] === 'all')) {
      newObj[key] = obj[key];
    }
  });
  return Object.entries(newObj)
    .map(([key, value]) => `${key}=${value}`)
    .join('&_');
};

export const mergeReducers =
  (...reducers) =>
  (state = {}, action) =>
    reducers.reduce(
      (accState, curReducer) =>
        produce(accState, (draft) => ({
          ...draft,
          ...curReducer(accState, action),
        })),
      freeze(state),
    );
