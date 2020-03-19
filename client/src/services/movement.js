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
    execution : data.execution,
    picture: data.picture,
    video : data.video
  
  });
  const newMovement = result.data;
  return newMovement;
};

const edit = async (data, id) => {
  const form = new FormData();
  form.append('name', data.name);
  form.append('setup', data.setup);
  form.append('protip', data.protip);
  form.append('description', data.description);
  form.append('execution', data.execution);
  form.append('video', data.video);
  form.append('picture', data.picture);
  const result = await instance.patch(`/${id}`, form);
  const user = result.data.user;
  return user;
};

// service para eleminar um moviment
const remove = async id => {
  const result = await instance.delete(`/${id}`);
  const moviment = result.data;
  return moviment;
};

export { list, single, create, edit, remove };
