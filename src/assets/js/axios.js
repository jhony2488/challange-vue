export const functionAxios = {
  axios: (vue, axios) => {
    vue.use({
      install(Vue) {
        Vue.prototype.$api = axios.create({
          baseURL: "https://reqres.in/api/users"
        });
      }
    });
  }
};
