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
  //console.log(data)
  const form = new FormData()
  form.append('name', data.name)
  form.append('setup', data.setup)
  form.append('protip', data.protip)
  form.append('description', data.description)
  form.append('execution', data.execution)
  form.append('picture', data.picture)
  form.append('video', data.video)


  const result = await instance.post(`/create`, form );
  //console.log(result)
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
