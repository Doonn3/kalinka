<script lang="ts" setup>
type PropsType = {
  id: number;
  title: string;
  type: string[];
  price: string;
  images: string[];
};

const props = defineProps<PropsType>();
const emit = defineEmits<(e: "emit:click") => void>();
</script>

<template>
  <div class="developer" @click="emit('emit:click')">
    <NuxtImg :src="props.images[0]" alt="img" />
    <div class="content">
      <div class="content__head">
        <span class="content__title">{{ props.title }}</span>
        <span class="content__type">{{ props.type.join("") }}</span>
      </div>
      <div>
        <span class="content__price">{{ props.price }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.developer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 320px;
  padding: 10px;
  background-color: #303030;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  transition: transform 0.4s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  & > img {
    width: 100%;
    height: 100%;
    max-height: 240px;
    object-fit: cover;
  }
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: center;

  &__title {
    font-size: 1.2rem;
  }

  &__type {
    font-size: 0.8rem;
  }

  &__price {
    font-size: 1.5rem;
    color: #ffba79;
  }
}
</style>
