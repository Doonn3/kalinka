<script lang="ts" setup>
type PropsType = {
  imgages: string[];
};

const props = defineProps<Partial<PropsType>>();

const currSlideIndex = ref(0);

const onPrev = () => {
  if (props.imgages === undefined) return;
  const calc =
    (currSlideIndex.value - 1 + props.imgages.length) % props.imgages.length;

  currSlideIndex.value = calc;
};

const onNext = () => {
  if (props.imgages === undefined) return;
  const calc = (currSlideIndex.value + 1) % props.imgages.length;
  currSlideIndex.value = calc;
};
</script>

<template>
  <div class="slider">
    <button class="btn slider__prev" @click="onPrev"><</button>

    <template v-for="(img, index) in props.imgages" :key="index">
      <Transition name="fade" class="slider__wrapper">
        <NuxtImg :src="img" alt="img" v-if="index === currSlideIndex" />
      </Transition>
    </template>
    <button class="btn slider__next" @click="onNext">></button>
  </div>
</template>

<style lang="scss" scoped>
.slider {
  position: relative;
  width: 100%;
  min-height: 700px;

  overflow: hidden;

  &:hover {
    .btn {
      opacity: 1;
    }
  }

  &__prev {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;

    z-index: 1999;
  }

  &__next {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;

    z-index: 1999;
  }

  &__wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.btn {
  width: 100px;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;

  font-size: 50px;
  color: rgb(255, 255, 255, 0.2);

  opacity: 0;

  transition: 0.4s ease-out;

  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(255, 255, 255, 0.5);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
