import axios from 'axios';

const API_KEY = '35672310-4fd2f94d19936bfbbb81d2e8c';
const BASE_URL = 'https://pixabay.com/api/';
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: 12,
};

export const getData = async (query, page) => {
  const resultData = await axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${query}&page=${page}`
  );
  return resultData.data;
};