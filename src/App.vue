<template>
  <v-app id="inspire">

    <v-app-bar
      app
      class="grey darken-2"
      dark
    >
        <v-toolbar-title @click.stop="showMainMenu" class="ml-4 display-2" pointer>MENU</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat to="/mainpage" class="ma-2 d-none d-md-flex" tile>Main Page</v-btn>
        <v-btn flat to="/orz" class="ma-2 d-none d-md-flex" tile>ORZ</v-btn>
        <v-btn flat to="/agate" class="ma-2 d-none d-md-flex" tile>Agate</v-btn>
        <v-btn flat to="/tournament" class="ma-2 d-none d-md-flex" tile>Tournament</v-btn>
    </v-app-bar>

    <v-content class="grey darken-4">
        <router-view></router-view>
    </v-content>
    <v-menu 
      v-model="showMenu"
      :position-x="x"
      :position-y="y"
      absolute
      offset-y>
      <v-list class="pa-2 grey darken-4">
        <v-list-item>
          <add-new-member></add-new-member>
        </v-list-item>
        <v-list-item class="pl-1 pr-1 flex-wrap">
          <v-btn class="mt-2" to="/addorz" width="100%">Add Orz</v-btn>
          <v-btn class="mt-2" to="/fillFights" width="100%">Add fights info</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app>
</template>

<script>
import AddNewMember from './components/Shared/ModalAddNewMate'
export default {
  name: 'App',
  data: () => ({
    showMenu: false,
    x: 0,
    y: 0,
    }),
  components: {
    "add-new-member" : AddNewMember
  },
  methods: {
    showMainMenu (e) {
            this.showMenu = false
            this.x = e.clientX
            this.y = e.clientY
            this.$nextTick(() => {
            this.showMenu = true
            })
        },
  }
};
</script>
