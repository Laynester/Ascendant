<script>
import comps from "./components/modules";

export default {
  components: comps,
  mounted: async function () {
    if (this.$store.state.token) {
      await this.$api
        .get("user/me")
        .then((e) => {
          let user = e.data.user;
          if (e.data.user) {
            this.$store.commit("setUser", user);
          } else {
            this.$store.commit("clearToken", null);
          }
        })
        .catch((e) => {
          this.$store.commit("clearToken", null);
        });
    }
  },
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