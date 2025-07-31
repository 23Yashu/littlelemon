import { fetchAPI } from '../api/api';

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.date));
};
