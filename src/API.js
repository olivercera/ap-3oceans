const url = 'https://cors-anywhere.herokuapp.com/https://24pullrequests.com/';

export const getRecaladas = (page) => {
  return fetch(`${url}users.json?page=${page}`);
};

export const getRecaladaById = (id) => {};

export const createRecalada = (content) => {};
