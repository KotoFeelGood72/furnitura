import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const main = axios.create({
    baseURL: '/api/',
  });

  return {
    provide: {
      main: main,
    },
  };
});
