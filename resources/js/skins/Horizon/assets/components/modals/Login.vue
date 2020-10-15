<script>
export default {
  data() {
    return {
      form: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    clear() {
      this.form.username = this.form.password = null;
    },
    login: async function () {
      await this.$api
        .post("/authentication/login", this.form)
        .then((data) => {
          if (data.data.token) {
            this.$store.dispatch("login", data.data);
            this.$bvToast.toast(`Welcome Back! ${data.data.user.username}`, {
              title: "Success",
              autoHideDelay: 5000,
              variant: "success",
              appendToast: true,
            });
            this.$bvModal.hide("modal-login");
          }
        })
        .catch((e) => {
          this.error("Incorrect username/password");
        });
    },
    error(message) {
      this.$bvToast.toast(message, {
        title: "Error",
        autoHideDelay: 5000,
        variant: "danger",
        appendToast: true,
      });
    },
  },
};
</script>
<template>
  <b-modal
    id="modal-login"
    title="Login"
    hide-footer
    centered
    @close="clear"
    @hide="clear"
  >
    <form class="p-2 mb-0" @submit.prevent="login">
      <div class="form-group">
        <label>Username:</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter your Username"
          required=""
          autofocus=""
          v-model="form.username"
        />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input
          type="password"
          class="form-control"
          placeholder="Enter your password"
          required=""
          autofocus=""
          v-model="form.password"
        />
      </div>
      <button class="btn btn-lg btn-primary btn-block mb-0" type="submit">
        Sign in
      </button>
    </form>
  </b-modal>
</template>