<script lang="ts" setup>
type PropsType = {
  id: number;
  title: string;
  type: string[];
  price: string;
  image: string;
};

const props = defineProps<PropsType>();
const emit = defineEmits<(e: "emit:click") => void>();
</script>

<template>
  <div class="developer" @click="emit('emit:click')">
    <span class="developer__type">{{ props.type.join("") }}</span>
    <NuxtImg :src="props.image" alt="img" />
    <div class="content">
      <span class="content__title">{{ props.title }}</span>

      <div>
        <span class="content__price">{{ props.price }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.developer {
  position: relative;
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

  &__type {
    position: absolute;
    top: 20px;
    font-size: 1.8rem;
    font-weight: bold;
    color: white;
    -webkit-text-stroke: 1px black;
  }

  & > img {
    width: 100%;
    height: 100%;
    max-height: 240px;
    min-height: 240px;
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

  &__price {
    font-size: 1.5rem;
    color: #ffba79;
  }
}
</style>
