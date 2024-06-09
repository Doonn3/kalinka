export type LanguageType = "ru" | "en";

export const language = ref<LanguageType>("ru");

export function switchLanguage() {
  if (language.value === "ru") {
    language.value = "en";
  } else {
    language.value = "ru";
  }

  localStorage.setItem("lang", language.value);
}
