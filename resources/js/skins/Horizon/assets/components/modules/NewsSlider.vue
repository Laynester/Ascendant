<script>
export default {
  data() {
    return {
      articleList: null,
      featuredArticles: null,
      faIndex: 0,
      show: true,
      interval: null,
    };
  },
  mounted: async function () {
    await this.$api
      .get("news/list/10")
      .then((e) => {
        let a = e.data.news;
        this.articleList = a.slice(-5);
        this.featuredArticles = a.slice(0, -5);
        this.show = false;
        this.interval = setInterval(this.tick, 3000);
      })
      .catch((e) => {});
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
  methods: {
    tick: async function () {
      if (this.faIndex < this.featuredArticles.length - 1) {
        this.faIndex = this.faIndex + 1;
      } else {
        this.faIndex = 0;
      }
    },
  },
  computed: {
    firstArticle() {
      return this.featuredArticles[this.faIndex];
    },
  },
};
</script>
<template>
  <b-overlay :show="show" rounded="sm" variant="dark">
    <b-card no-body v-if="articleList">
      <b-card
        overlay
        :title="firstArticle.caption"
        class="text-white news-card"
        :style="
          'background-image:url(/images/news/' + firstArticle.image + ');'
        "
        img-top
        :sub-title="firstArticle.habbo.username"
      >
        <b-card-text>
          {{ firstArticle.desc }}
        </b-card-text>
      </b-card>
      <b-list-group flush>
        <b-list-group-item v-for="(l, i) in articleList" :key="i">
          {{ l.caption }}
          <span class="text-muted small float-right">{{ l.date }}</span>
        </b-list-group-item>
      </b-list-group>

      <b-button href="#" variant="warning">Read More</b-button>
    </b-card>
  </b-overlay>
</template>