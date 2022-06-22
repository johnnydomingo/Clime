import api from "./apiConfig"; 

export const getAllCities = async () => {
  const resp = await api.get('/cities');
  return resp.data;
};

export const getOneCity = async (id) => {
  const resp = await api.get(`/cities/${id}`);
  return resp.data;
};