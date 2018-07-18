import axiosService from '../services/axiosService';

export const tagsGet = () => axiosService.get('tags');

export const todoGet = pgNumber => axiosService.get('todos/' + pgNumber);

export const todoDelete = id => axiosService.delete('todos/' + id);

export const todoPost = values =>
  axiosService.post('todos', { name: values.todoName, tags: values.tags });

export const todoSearch = (key, pgNumber) =>
  axiosService.get('todos/search/' + pgNumber, { params: { key: key } });

export const todoEdit = (id, newTodo) =>
  axiosService.put('todos/' + id, {
    name: newTodo
  });

