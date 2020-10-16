<script>
export default {
  data() {
    return {
      ready: false,
      user: {
        username: "Noob",
        look: "hr-100.ch-210-66.lg-270-82.sh-290-80",
      },
    };
  },
  mounted: async function () {
    await this.$api.get("user/fetch/" + this.$config.uotw).then((e) => {
      e = e.data;
      if (e.user) {
        this.user = e.user;
        this.ready = true;
      }
    });
  },
};
</script>

<template>
  <b-overlay :show="!ready" variant="transparent" opacity="0.8">
    <b-card class="mb-2" no-body header="User Of The Week">
      <b-card class="uotw-card">
        <img class="avatar" :src="$config.habbo_imager + user.look" />
      </b-card>
      <b-card-text class="p-2">
        <router-link class="user" :to="{ name: 'Home' }">
          {{ user.username }}
        </router-link>
      </b-card-text>
    </b-card>
  </b-overlay>
</template>