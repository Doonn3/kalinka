<script lang="ts" setup>
type PropsType = {
  lang: string;
};

const props = defineProps<PropsType>();
const emit = defineEmits<(e: "emit:switch") => void>();
</script>

<template>
  <button class="btn" @click="emit('emit:switch')">{{ props.lang }}</button>
</template>

<style lang="scss" scoped>
.btn {
  width: 50px;
  height: 50px;
  padding: 5px 10px;
  background-color: #3475ca;
  border-radius: 50%;
  box-shadow: 0 0 10px #3475ca;
  border: none;
  color: white;
  text-transform: uppercase;

  transition: 0.4s linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px #3475ca;
  }
}
</style>
