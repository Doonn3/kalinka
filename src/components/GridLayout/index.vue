<template>
  <section class="grid-layout">
    <slot></slot>
  </section>
</template>

<style lang="scss" scoped>
.grid-layout {
  display: grid;
  place-content: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}
</style>
