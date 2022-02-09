import { api } from './api';

type Type = {
  name: string;
  url: string;
}

export async function getTypes(): Promise<Type[]> {
  const { data } = await api.get('/type');

  const types = data.results;

  return types;
}