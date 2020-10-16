<template>
  <div class="py-5 px-1 bg-horizon-1 the-header">
    <b-container class="align-self-center">
      <b-row class="justify-content-md-between justify-content-lg-between">
        <b-col
          sm="3"
          class="text-center text-md-right mb-2 mb-sm-0 align-self-center"
          v-if="!$store.state.token"
        >
          <button
            class="btn btn-primary btn-xl register"
            v-b-modal.modal-register
          >
            Register
            <span class="icon" />
          </button>
        </b-col>
        <b-col sm="4" :class="{ 'text-center': !$store.state.token }">
          <img :src="$config.logo_big" />
        </b-col>
        <b-col
          sm="3"
          class="text-center text-md-left text-lg-right mt-2 mt-sm-0 align-self-center"
        >
          <button
            class="btn btn-primary btn-xl login"
            v-b-modal.modal-login
            v-if="!$store.state.token"
          >
            <span class="icon" />Login
          </button>
          <b-dropdown
            id="dropdown-1"
            variant="primary btn-xl pl-4"
            text="Dropdown Button"
            v-if="$store.state.token && $store.state.user"
          >
            <template v-slot:button-content>
              <div class="avatar">
                <img :src="$config.habbo_imager + $store.state.user.look" />
              </div>
              <span class="text-shadow-horizon-1 ml-4">{{
                $store.state.user.username
              }}</span>
            </template>
            <b-dropdown-item>First Action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-text variant=" px-2" disabled>
              <b-button variant="outline-danger w-100" :to="{ name: 'Logout' }"
                >Logout</b-button
              >
            </b-dropdown-text>
          </b-dropdown>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>