import { createFetch } from '@vueuse/core';

const baseUrl = 'https://invoices-api-6pka.onrender.com';
const requestOptions = {
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
};

const useAuthFetch = createFetch({
  baseUrl,
  combination: 'overwrite',
  options: {
    async beforeFetch({ options }) {
      // eslint-disable-next-line no-param-reassign
      options = {
        ...requestOptions,
      };
      return { options };
    },
  },
});

export const authLogin = () => useAuthFetch('/login', { immediate: false });
export const authSignup = () => useAuthFetch('/signup', { immediate: false });
