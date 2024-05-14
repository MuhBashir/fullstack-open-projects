import axios from 'axios';
const baseUrl = '/api/persons';

const getAllPersons = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const createPerson = (personObj) => {
  const request = axios.post(baseUrl, personObj);
  return request.then((response) => response.data);
};

const deletePerson = (personObj) => {
  const { id } = personObj;
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((res) => res.data);
};

const updatePerson = (personObj) => {
  const request = axios.put(`${baseUrl}/${personObj.id}`, personObj);
  return request.then((res) => res.data);
};

export default {
  getAllPersons,
  createPerson,
  deletePerson,
  updatePerson,
};
