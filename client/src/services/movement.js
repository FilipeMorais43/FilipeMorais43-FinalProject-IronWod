import axios from 'axios';

const instance = axios.create({
  // temos de adicionar aqui o nosso api no URL
  baseURL: '/api/movement'
});

// service para gerar lista de movimentos
const list = async () => {
  try {
    const result = await instance.get('/list');
    const moviments = result.data;
    return moviments;
  } catch (error) {
    throw error;
  }
};

//service para mostrar um movimento
const single = async id => {
  const result = await instance.get(`/${id}`);
  const movement = result.data;
  return movement;
};

//service para criar um movimento
const create = async (data) => {
  const result = await instance.post(`/create`, { 
    name : data.name ,
    setup : data.setup ,
    protip : data.protip,
    description : data.description,
    execution : data.execution
  
  });
  const newMovement = result.data;
  return newMovement;
};

//service para editar um moviment
const edit = async (id, name) => {
  const result = await instance.put(`/edit/${id}`, { name });
  const movement = result.data;
  return movement;
};
// service para eleminar um moviment
const remove = async id => {
  const result = await instance.delete(`/${id}`);
  const moviment = result.data;
  return moviment;
};

export { list, single, create, edit, remove };


