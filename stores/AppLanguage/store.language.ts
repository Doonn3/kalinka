export type LanguageType = "ru" | "en";

let getLang: LanguageType | null = null;

if (process.client) {
  getLang = localStorage.getItem("lang") as LanguageType;
}

console.log(getLang);
const language = ref<LanguageType>("ru");

export function switchLanguage() {
  if (language.value === "ru") {
    language.value = "en";
  } else {
    language.value = "ru";
  }

  localStorage.setItem("lang", JSON.stringify(language.value));
}

export const lang = computed(() => {
  return language.value;
});
