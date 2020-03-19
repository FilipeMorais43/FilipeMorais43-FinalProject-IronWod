import axios from 'axios';

const instance = axios.create({
  // temos de adicionar aqui o nosso api no URL
  baseURL: '/api/wod'
});

// create wod list
const list = async () => {
  try {
    const result = await instance.get('/list');
    const wods = result.data;
    return wods;
  } catch (error) {
    throw error;
  }
};

//create wod list user
const listUser = async userId => {
  try {
    const result = await instance.get(`/list/${userId}`);
    const wods = result.data;
    return wods;
  } catch (error) {
    throw error;
  }
};

const create = async data => {
  const result = await instance.post(`/create`, {
    name: data.name,
    wod: data.wod,
    score: data.score,
    tips: data.tips,
    video: data.video,
    user: data.user,
    picture: data.picture
  });
  const newMovement = result.data;
  return newMovement;
};

//service para mostrar um movimento
const single = async id => {
  const result = await instance.get(`/${id}`);
  const wod = result.data;
  return wod;
};

//edit do wod
const edit = async (data, id) => {
  const form = new FormData();
  form.append('name', data.name);
  form.append('wod', data.wod);
  form.append('score', data.score);
  form.append('tips', data.tips);
  form.append('video', data.video);
  form.append('picture', data.picture);
  const result = await instance.patch(`/${id}`, form);
  const user = result.data.user;
  return user;
};

export { list, create, listUser, single, edit };
