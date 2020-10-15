<script>
export default {
  data() {
    return {
      pages: null,
    };
  },
  mounted: async function () {
    await this.$api.get("page/all").then((e) => {
      this.pages = e.data.pages;
    });
  },
  computed: {
    actualPages() {
      let pages = [];
      let data = this.pages;
      data.forEach((element, i) => {
        if (element.parent_id === -1) {
          pages[i].push(element);
        }
      });
      return pages;
    },
  },
};
</script>
<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="horizon-gradient-1"
    class="border-left-0 border-right-0 border-solid border-2 border-light p-0"
  >
    <b-container v-if="pages">
      <b-navbar-toggle target="nav-collapse" class="my-4"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <div
            v-for="(l, i) in pages"
            :key="i"
            class="py-1"
            :class="{ 'py-2': !$store.state.token }"
          >
            <b-nav-item
              v-if="l.children.length == 0"
              :to="{ name: l.route_name }"
              class="text-shadow-horizon-1 text-uppercase"
              ><i v-if="l.icon" class="fas pr-1" :class="'fa-' + l.icon" />{{
                l.name
              }}</b-nav-item
            >
            <b-nav-item-dropdown right v-else>
              <template v-slot:button-content>
                <span class="text-shadow-horizon-1 text-uppercase">
                  <i v-if="l.icon" class="fas pr-1" :class="'fa-' + l.icon" />
                  {{ l.name }}
                </span>
              </template>
              <b-dropdown-item :to="{ name: l.route_name }">
                <i v-if="l.icon" class="fas pr-1" :class="'fa-' + l.icon" />
                {{ l.name }}
              </b-dropdown-item>
              <b-dropdown-item href="#" v-for="(c, ii) in l.children" :key="ii"
                ><i v-if="c.icon" class="fas pr-1" :class="'fa-' + c.icon" />{{
                  c.name
                }}</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </div>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto h-100">
          <b-navbar-brand
            right
            href="#"
            class="d-flex flex-column justify-content-center"
          >
            <b-badge variant="light">1 User(s) online</b-badge>
          </b-navbar-brand>
          <button
            v-if="$store.state.token"
            class="btn- btn-lg ac-btn ac-btn-green ac-btn-enter py-3"
          >
            Enter
          </button>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>