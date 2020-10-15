<script>
export default {
  data() {
    return {
      form: {
        username: null,
        mail: null,
        password: null,
        password_confirmation: null,
      },
      errors: {
        username: false,
        mail: false,
        password: false,
      },
    };
  },
  methods: {
    clear() {
      this.form.username = this.form.mail = this.form.password = this.form.confirm = null;
    },
    register: async function () {
      this.errors.username = this.errors.mail = this.errors.password = false;
      let test = await this.$api
        .post("authentication/register", this.form)
        .then((d) => {
          this.login();
        })
        .catch((error) => {
          if (error.response.data.username) {
            this.errors.username = true;
            error.response.data.username.forEach((element) => {
              this.error(element);
            });
          }
          if (error.response.data.mail) {
            this.errors.mail = true;
            error.response.data.mail.forEach((element) => {
              this.error(element);
            });
          }
          if (error.response.data.password) {
            this.errors.password = true;
            error.response.data.mail.forEach((element) => {
              this.error(element);
            });
          }
        });
    },
    login: async function () {
      await this.$api
        .post("/authentication/login", {
          username: this.form.username,
          password: this.form.password,
        })
        .then((data) => {
          this.$store.commit("SET_TOKEN", data.data.token);
          this.$bvToast.toast(`Welcome Back! ${data.data.user.username}`, {
            title: "Success",
            autoHideDelay: 5000,
            variant: "success",
            appendToast: true,
          });
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
    id="modal-register"
    title="Register"
    hide-footer
    centered
    @close="clear"
    @hide="clear"
  >
    <form class="p-2 mb-0" @submit.prevent="register">
      <div class="form-group">
        <label>Username:</label>
        <input
          name="username"
          type="text"
          class="form-control"
          placeholder="Enter your Username"
          required=""
          autofocus=""
          v-model="form.username"
          :class="{ 'border-danger': errors.username }"
        />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input
          name="email"
          type="email"
          class="form-control"
          placeholder="Enter your Email"
          required=""
          autofocus=""
          v-model="form.mail"
          :class="{ 'border-danger': errors.mail }"
        />
      </div>
      <div class="row">
        <div class="form-group col-sm-6">
          <label>Password:</label>
          <input
            name="password"
            type="password"
            class="form-control"
            placeholder="Enter your password"
            required=""
            autofocus=""
            v-model="form.password"
            :class="{ 'border-danger': errors.password }"
          />
        </div>
        <div class="form-group col-sm-6">
          <label>Confirm Password:</label>
          <input
            name="confirm_password"
            type="password"
            class="form-control"
            placeholder="Confirm your password"
            required=""
            autofocus=""
            v-model="form.password_confirmation"
            :class="{ 'border-danger': errors.password }"
          />
        </div>
      </div>
      <button class="btn btn-lg btn-primary btn-block mb-0" type="submit">
        Sign in
      </button>
    </form>
  </b-modal>
</template>