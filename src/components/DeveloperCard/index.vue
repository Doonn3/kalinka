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
    <img :src="props.images[0]" alt="" />
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
  position: relative;
  width: 350px;
  height: 320px;

  background-color: rgb(48, 48, 48);
  border: 1px solid black;
  border-radius: 5px;

  color: white;

  transition: 0.4s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }

  &__title {
    font-size: 28px;
  }

  & > img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 400px) {
    width: 300px;
    height: 300px;
  }
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px;

  background-color: rgba(0, 0, 0, 0.4);
  -webkit-text-stroke-width: 0.2px;
  -webkit-text-stroke-color: black;

  &__head {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  &__title {
    font-size: 25px;
    text-align: center;
  }

  &__type {
    font-size: 15px;
  }

  &__price {
    font-size: 30px;
    color: rgb(255, 186, 121);
  }
}
</style>
