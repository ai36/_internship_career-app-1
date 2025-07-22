import { BASE_URL } from '@/constants';
import { formatURLParams as format } from '@/utils';

export const api = {
  get: async ({ url, params = {}, signal = null }) => {
    const res = await fetch(BASE_URL + url + format(params), {
      method: 'GET',
      signal
    });
    if (!res.ok) {
      throw new Error('Bad response: ' + res.status);
    }

    return res.json();
  },
};
