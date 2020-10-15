<script>
import comps from "./components/modules";
export default {
  components: comps,
};
</script>
<template>
  <div class="row">
    <div
      v-for="(c, index) in $store.state.pageTemplate"
      :key="index"
      :class="c.attributes.class"
    >
      <div v-for="(m, i) in $store.state.pageContent[index]" :key="i">
        <component :is="m" />
      </div>
    </div>
  </div>
</template>