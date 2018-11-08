<template>
  <v-app>
  <v-navigation-drawer 
    v-model="drawer"
    fixed
    app>
    <DrawerList/>
    
  </v-navigation-drawer>
  <v-toolbar flat app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer" />
     <v-toolbar-title>{{ $store.state.title }}</v-toolbar-title>
     <v-spacer/>
     <v-avatar @click.stop="right=!right">
      <v-icon large>account_circle</v-icon>
    </v-avatar>
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <nuxt/>
    </v-container>
  </v-content>
  <v-navigation-drawer 
      v-model="right"
      right
      temporary
      fixed>
      <v-list>
        <v-list-tile>
          <v-layout wrap>
            <v-flex text-xs-center>
              <v-icon size="50">account_circle</v-icon>
            </v-flex>
          </v-layout>
        </v-list-tile>
        <v-list-tile>
          <h3>{{ $auth.user.name }}</h3>
        </v-list-tile>
      </v-list>
  </v-navigation-drawer>
  <v-footer >
    <v-layout 
      row 
      wrap 
      justify-center>
      <v-flex 
        xs12 
        text-xs-center>
       <strong>&copy;2018 Property of {{ $store.state.devCompany }}</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</v-app>
</template>

<script>
import DrawerList from "@/components/Drawer/DrawerList";
export default {
  middleware: "auth",
  components: { DrawerList },
  data() {
    return {
      drawer: false,
      right: null
    };
  }
};
</script>
