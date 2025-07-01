import { API_URL } from '@constants';
import { formatURLParams as format } from '@/utils';

export async function request(url, params) {
  const res = await fetch(API_URL + url + format(params));
  if (!res.ok) {
    throw new Error('Отсутствует связь со сторонним сервисом');
  }
  return res.json();
}
