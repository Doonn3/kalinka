<script lang="ts" setup>
import type { NormalizeDeveloperType } from "~/server/types";
import { language } from "~/stores/AppLanguage/store.language";
import { useSSRFetch } from "./_hooks/useSSRFetch";

const { data, page, reFetch } = useSSRFetch();
const router = useRouter();

const devs = computed(() => {
  return data.value?.data?.map<NormalizeDeveloperType>((item) => {
    return {
      id: item.id,
      title: item.title[language.value],
      type: item.type,
      price: humanReadablePrice(Number(item.price), language.value !== "en"),
      images: item.images,
      description: item.description[language.value],
    };
  });
});

const goTo = (id: number) => {
  router.push(`${id}`);
};

const onSearch = (type: string) => {
  if (type === "All") type = "";
  page.value = 1;
  reFetch(type);
};
</script>
<template>
  <section class="page">
    <GridLayout>
      <DeveloperCard
        v-for="developer in devs"
        :key="developer.id"
        :id="developer.id"
        :images="developer.images"
        :price="developer.price"
        :title="developer.title"
        :type="developer.type"
        @emit:click="goTo(developer.id)"
      />
    </GridLayout>

    <div class="page__bottom">
      <Pagination
        v-if="data && data.pages !== 0"
        :count="data.pages"
        @emit:select="(num) => (page = num)"
      />

      <SearchFilter
        :types="['All', 'Villa', 'Condo']"
        @emit:search="onSearch"
      />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
  padding: 5px;

  &__bottom {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    height: 100px;
    background-color: #303030;
    border-radius: 5px;
  }
}
</style>
