<script setup lang="ts">
import { lang, switchLanguage } from "~/stores/AppLanguage/store.language";
</script>

<template>
  <div>
    <SwitchLanguge
      class="btn-language"
      :lang="lang"
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
  z-index: 1999;
}
</style>
