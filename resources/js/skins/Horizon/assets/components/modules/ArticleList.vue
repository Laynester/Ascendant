<script>
export default {
  mounted: async function () {
    await this.$api.get("news/list/10").then((e) => {
      this.$store.commit("setNews", e.data.news);
      this.$store.commit("setNewsFeatured", e.data.news[0]);
    });
  },
};
</script>

<template>
  <b-card no-body header="Recent Articles">
    <b-list-group>
      <b-list-group-item
        flush
        v-for="(n, i) in $store.state.news.articles"
        :key="i"
        @click.prevent="$store.commit('setNewsFeatured', n)"
        button
      >
        {{ n.caption }}
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>