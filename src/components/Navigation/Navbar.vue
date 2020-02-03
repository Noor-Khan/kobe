<template>
  <div id="header">
    <v-toolbar>
      <v-toolbar-title>Kobe Bryant</v-toolbar-title>
      <v-spacer></v-spacer>
      <ul class="nav-list hidden-sm-and-down ml-5">
        <li class="nav-item">
          <a href="#biography">Biography</a>
        </li>
        <li class="nav-item">
          <a href="#career">Career</a>
        </li>
        <li class="nav-item">
          <a href="#achievements">Achievement</a>
        </li>
        <li class="nav-item">
          <a href="#gallery">Gallery</a>
        </li>
      </ul>
      <v-dialog v-model="mobMenu" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn text color="primary" v-on="on" class="hidden-sm-and-up p0">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary" style="border-radius: 0;">
            <v-btn icon dark @click="mobMenu = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-toolbar>
          <ul class="nav-list pl-0">
            <v-list-item class="nav-item">
              <v-list-item-content>
                <v-list-item-title>
                  <a href="#biography">Biography</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="nav-item">
              <v-list-item-content>
                <v-list-item-title>
                  <a href="#career">Career</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="nav-item">
              <v-list-item-content>
                <v-list-item-title>
                  <a href="#achievements">Achievements</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="nav-item">
              <v-list-item-content>
                <v-list-item-title>
                  <a href="#gallery">Gallery</a>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </ul>
        </v-card>
      </v-dialog>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      navRoutes: null,
      navBtn: true,
      isVisibleModal: false,
      mobMenu: false
    };
  },
  methods: {
    navIconChange() {
      this.navBtn = !this.navBtn;
    },
    hideModal(closeModal) {
      this.isVisibleModal = closeModal;
    }
  }
};
</script>
<style lang="scss">
</style>
