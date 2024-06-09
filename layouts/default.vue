<script setup lang="ts">
import { language, switchLanguage } from "~/stores/AppLanguage/store.language";
</script>

<template>
  <div>
    <SwitchLanguge
      class="btn-language"
      :lang="language"
      @emit:switch="switchLanguage"
    />
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.btn-language {
  position: fixed;
  right: 10px;
  bottom: 10px;
  z-index: 2999;
}
</style>
