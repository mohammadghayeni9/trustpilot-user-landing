import { ref, onMounted } from "vue";

export function useTheme() {
  const theme = ref("dark");

  const setTheme = (value: string) => {
    theme.value = value;
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", value);
    }
    document.documentElement.classList.toggle("dark", value === "dark");
  };

  onMounted(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";
      theme.value = savedTheme || systemTheme;
      document.documentElement.classList.toggle("dark", theme.value === "dark");
    }
  });

  return { theme, setTheme };
}
