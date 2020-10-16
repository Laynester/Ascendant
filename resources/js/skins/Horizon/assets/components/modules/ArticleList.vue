<script>
export default {
  data() {
    return {
      ready: false,
      news: [
        {
          caption: "HABBO HACKED??",
          date: Date.now(),
          habbo: { username: "Unknown" },
          image: "TPMPRomo.png",
          body: "<h6>HABBO WAS HACKED??</h6>",
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
    };
  },
  mounted: async function () {
    this.$store.commit("setNews", this.news);
    this.$store.commit("setNewsFeatured", this.news[0]);
    await this.$api.get("news/list/10").then((e) => {
      this.$store.commit("setNews", e.data.news);
      this.$store.commit("setNewsFeatured", e.data.news[0]);
      this.ready = true;
    });

    if (this.$route.params.id) {
      this.$store.state.news.articles.forEach((news, index) => {
        if (news.id === parseInt(this.$route.params.id.split("-")[0])) {
          this.$store.commit("setNewsFeatured", news);
        }
      });
    }
  },
  methods: {},
};
</script>

<template>
  <b-overlay :show="!ready" variant="transparent" opacity="0.8">
    <b-card no-body header="Recent Articles">
      <b-list-group>
        <b-list-group-item
          flush
          v-for="(n, i) in $store.state.news.articles"
          :key="i"
          :to="{
            name: 'Articles',
            params: { id: n.id + '-' + n.caption.split(' ').join('-') },
          }"
          @click.native="$store.commit('setNewsFeatured', n)"
        >
          {{ n.caption }}
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </b-overlay>
</template>