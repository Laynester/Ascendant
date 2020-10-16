<script>
export default {
  data() {
    return {
      ready: false,
    };
  },
  mounted() {
    this.ready = true;
  },
};
</script>
<template>
  <b-overlay :show="!ready" variant="transparent" opacity="0.8">
    <b-card
      overlay
      :title="$store.state.news.featured.caption"
      class="text-white news-card"
      :style="
        'background-image:url(/images/news/' +
        $store.state.news.featured.image +
        ');'
      "
      img-top
      :sub-title="$store.state.news.featured.habbo.username"
    >
      <b-card-text>
        {{ $store.state.news.featured.desc }}
      </b-card-text>
    </b-card>
    <b-card :title="$store.state.news.featured.caption">
      <b-card-text v-html="$store.state.news.featured.body" />
    </b-card>
  </b-overlay>
</template>