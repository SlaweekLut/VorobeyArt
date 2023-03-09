export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.$router.options.scrollBehavior = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ top: 0 });
      }, 500);
    });
  };
});
