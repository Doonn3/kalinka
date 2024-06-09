<script lang="ts" setup>
import type { DeveloperType, NormalizeDeveloperType } from "~/server/types";
import { language } from "~/stores/AppLanguage/store.language";

const route = useRoute();

const { data, error } = await useFetch<DeveloperType>(
  "/api/get.developerByID",
  {
    query: { id: route.params.id },
  }
);

const developer = computed(() => {
  const normalize: Partial<NormalizeDeveloperType> = {
    id: data.value?.id,
    title: data.value?.title[language.value],
    type: data.value?.type,
    price: humanReadablePrice(
      Number(data.value?.price),
      language.value !== "en"
    ),
    images: data.value?.images,
    description: data.value?.description[language.value],
  };
  return normalize;
});
</script>

<template>
  <section class="page">
    <ClientOnly>
      <Slider :imgages="developer.images" />
    </ClientOnly>

    <div class="page__bg">
      <span class="page__title">{{ developer.title }}</span>
      <span class="page__type">{{ developer.type?.join("") }}</span>
      <Price>{{ developer.price }}</Price>
      <div class="page__description" v-html="developer.description"></div>

      <NuxtLink class="back-link" to="/">Back</NuxtLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;

  &__bg {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background-color: #303030;
    color: white;
  }

  &__title {
    font-size: 40px;
  }

  &__type {
    font-size: 30px;
  }

  &__description {
    font-size: 20px;
  }
}

.back-link {
  position: fixed;
  top: 15px;
  left: 15px;
  padding: 10px;
  background-color: rgb(58, 114, 109);
  border-radius: 10px;
  color: white;

  transition: 0.2s linear;
  z-index: 2999;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}
</style>
