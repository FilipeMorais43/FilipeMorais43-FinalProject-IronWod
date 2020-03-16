import axios from 'axios';

const instance = axios.create({
  // temos de adicionar aqui o nosso api no URL
  baseURL: '/api'
});

const list = () =>
  new Promise((resolve, reject) => {
    instance
      .get('exercise/list')
      .then(result => {
        const exercises = result.data;
        resolve(exercises);
      })
      .catch(reject);
  });

const load = id =>
  new Promise((resolve, reject) => {
    instance
      .get(`/exercise/${id}`)
      .then(result => {
        const exercise = result.data;
        resolve(exercise);
      })
      .catch(reject);
  });

const random = () =>
  new Promise((resolve, reject) => {
    instance
      .get('exercise/random')
      .then(result => {
        const exercise = result.data;
        resolve(exercise);
      })
      .catch(reject);
  });

//se permitirmos o user criar um exercicio

/*const add = exercise =>
  new Promise((resolve, reject) => {
    instance
      .get('exercise/new')
      .then(result => {
        resolve(result);
      })
      .catch(reject);
  });
*/
export { list, load, random };

//adicionar add no export após tirar coments e usar o metodo
