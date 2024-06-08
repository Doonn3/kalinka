<script lang="ts" setup>
import type { NormalizeDeveloperType } from "~/server/types/types";
import { lang } from "~/stores/AppLanguage/store.language";

const { data, page, reFetch } = useSSRFetch();
const router = useRouter();

const devs = computed(() => {
  return data.value?.data?.map<NormalizeDeveloperType>((item) => {
    return {
      id: item.id,
      title: item.title[lang.value],
      type: item.type,
      price: humanReadablePrice(Number(item.price), lang.value !== "en"),
      images: item.images,
      description: item.description[lang.value],
    };
  });
});

const goTo = (id: number) => {
  router.push(`${id}`);
};

const onSearch = (type: string) => {
  if (type === "All") type = "";
  reFetch(type);
};
</script>
<template>
  <!-- <section class="page"> -->
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
    <!-- <div class="page__content"></div> -->

    <!-- <div class="page__pag-wrapper">
      <Pagination
        v-if="data && data.pages !== 0"
        :count="data.pages"
        @emit:select="(num) => (page = num)"
      />

      <SearchFilter
        :types="['All', 'Villa', 'Condo']"
        @emit:search="onSearch"
      />
    </div> -->
  <!-- </section> -->
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 5px;

  &__content {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
  }

  &__pag-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 10px;
    height: 100px;
    padding: 10px;
    background-color: #5c5c5c;
    border-radius: 5px;
  }
}
</style>
