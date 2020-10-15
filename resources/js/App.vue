<script>
import comps from "./skins";

export default {
  data() {
    return {
      theme: this.$config.theme,
    };
  },
  components: comps.comps,
};
</script>
<template>
  <div
    :id="theme"
    class="h-100"
    :class="{ authenticated: $store.getters.authenticated }"
  >
    <component :is="theme" />
  </div>
</template>
