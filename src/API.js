const url = 'https://cors-anywhere.herokuapp.com/https://24pullrequests.com/';

export const getRecaladas = (page) => {
  const response = fetch(`${url}users.json?page=${page}`);
  console.log(response)
  return response;
};

export const getRecaladaById = (id) => {};

export const createRecalada = (content) => {
  return fetch(`${url}users.json?page=${page}`);
};
