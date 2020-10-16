<script>
export default {
  data() {
    return {
      articleList: [
        {
          caption: "HABBO HACKED??",
          date: Date.now(),
          habbo: { username: "Unknown" },
          image: "TPMPRomo.png",
        },
        {
          caption: "HABBO HACKED??",
          date: Date.now(),
          habbo: { username: "Unknown" },
          image: "TPMPRomo.png",
        },
        {
          caption: "HABBO HACKED??",
          date: Date.now(),
          habbo: { username: "Unknown" },
          image: "TPMPRomo.png",
        },
        {
          caption: "HABBO HACKED??",
          date: Date.now(),
          habbo: { username: "Unknown" },
          image: "TPMPRomo.png",
        },
        {
          caption: "HABBO HACKED??",
          date: Date.now(),
          habbo: { username: "Unknown" },
          image: "TPMPRomo.png",
        },
      ],
      featuredArticles: [
        {
          caption: "HABBO HACKED??",
          date: Date.now(),
          habbo: { username: "Unknown" },
          image: "TPMPRomo.png",
        },
      ],
      faIndex: 0,
      ready: false,
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
        this.ready = true;
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
  <b-overlay :show="!ready" variant="transparent" opacity="0.8">
    <b-card no-body>
      <b-card
        overlay
        :title="firstArticle.caption"
        class="text-white news-card"
        :style="
          'background-image:url(/images/news/' + firstArticle.image + ');'
        "
        img-top
        :sub-title="firstArticle.habbo.username"
        @click.prevent="$store.dispatch('news', firstArticle)"
      >
        <b-card-text>
          {{ firstArticle.desc }}
        </b-card-text>
      </b-card>
      <b-list-group flush>
        <b-list-group-item
          v-for="(l, i) in articleList"
          :key="i"
          @click.prevent="$store.dispatch('news', l)"
        >
          {{ l.caption }}
          <span class="text-muted small float-right">{{ l.date | date }}</span>
        </b-list-group-item>
      </b-list-group>

      <b-button href="#" variant="warning mx-1 my-2" :to="{ name: 'Articles' }"
        >Read More</b-button
      >
    </b-card>
  </b-overlay>
</template>