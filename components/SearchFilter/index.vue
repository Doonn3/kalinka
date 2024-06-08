<script lang="ts" setup>
import { ref } from "vue";

type PropsType = {
  types: string[];
};

const props = defineProps<PropsType>();
const selectedType = ref(props.types[0] ?? "");

const emit = defineEmits<(e: "emit:search", select: string) => void>();
const onSelect = (e: Event) => {
  const target = e.target;
  if (!(target instanceof HTMLSelectElement)) return;
  selectedType.value = target.value;
};

const onSearch = () => {
  emit("emit:search", selectedType.value);
};
</script>

<template>
  <div class="filter">
    <select class="filter__select" name="" id="" @change="onSelect">
      <option v-for="type in props.types" :key="type" :value="type">
        {{ type }}
      </option>
    </select>

    <button class="filter__search" @click="onSearch">S</button>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  width: 200px;
  height: 30px;
  background-color: black;

  border-top-right-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;

  &__select {
    width: 80%;
  }

  &__search {
    width: 20%;
    height: 100%;

    background-color: black;
    color: white;

    border-top-right-radius: 10px 10px;
    border-bottom-right-radius: 10px 10px;

    cursor: pointer;
  }
}
</style>
