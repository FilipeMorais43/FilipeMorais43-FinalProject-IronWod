import axios from 'axios';

const instance = axios.create({
  // temos de adicionar aqui o nosso api no URL
  baseURL: '/api/movement'
});

// service para gerar lista de movimentos
const list = async () => {
  try {
    const result = await instance.get('/');
    const moviments = result.data;
    return moviments;
  } catch (error) {
    throw error;
  }
};

//service para mostrar um movimento
const single = async id => {
  const result = await instance.get(`/${id}`);
  const moviment = result.data;
  return moviment;
};

//service para criar um movimento
const create = async name => {
  const result = await instance.post(`/create`, { name });
  const newMoviment = result.data;
  return newMoviment;
};

//service para editar um moviment
const edit = async (id, name) => {
  const result = await instance.put(`/edit/${id}`, { name });
  const moviment = result.data;
  return moviment;
};
// service para eleminar um moviment
const remove = async id => {
  const result = await instance.delete(`/${id}`);
  const moviment = result.data;
  return moviment;
};

export { list, single, create, edit, remove };

//adicionar add no export após tirar coments e usar o metodo
