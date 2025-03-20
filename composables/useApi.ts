import { ref, type Ref } from "vue";

interface FetchOptions extends RequestInit {}
type FetchError = string | null;

export default function useApi<T>() {
  const data: Ref<T | null> = ref(null);
  const isLoading: Ref<boolean> = ref(false);
  const error: Ref<FetchError> = ref(null);

  const fetchData = async (url: string, options: FetchOptions = {}) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
      }
      data.value = await response.json();
      return data.value as any;
    } catch (err: any) {
      error.value = err.message || "خطایی رخ داده است";
      return null;
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    isLoading,
    error,
    fetchData,
  };
}
