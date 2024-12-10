import { ref } from 'vue'

const loading = ref(false);

export const useCustomLoadingIndicator = () => {

  const start =  () => (loading.value = true);

  const finish =  () => (loading.value = false);

  return {
    loading,
    start,
    finish
  }
};
