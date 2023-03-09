import mapgl from '2gis-maps';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      mapgl,
    },
  };
});
