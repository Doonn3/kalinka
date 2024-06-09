<script lang="ts" setup>
type PropsType = {
  count: number;
};
const props = defineProps<PropsType>();

const emit = defineEmits<(e: "emit:select", id: number) => void>();
</script>

<template>
  <div class="list">
    <button
      class="list__btn"
      v-for="(num, index) in props.count"
      :key="index"
      @click="emit('emit:select', num)"
    >
      {{ num }}
    </button>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  gap: 5px;

  padding: 10px;
  background-color: black;
  border: 1px solid white;
  border-radius: 10px;

  &__btn {
    width: 40px;
    height: 40px;
    background-color: rgb(70, 129, 255);
    border: none;
    border-radius: 50%;

    font-size: 24px;
    color: white;

    transition: 0.4s linear;
    cursor: pointer;

    &:hover {
      background-color: rgb(52, 94, 185);
    }
  }
}
</style>
