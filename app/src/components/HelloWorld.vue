<template>
  <v-container class="pa-12">
    <v-row>
      <v-col>
        <h1 class="text-center">I'm worked!</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import {mapState} from "vuex";

export default {
    name: 'HelloWorld',

    data: () => ({
    
    }),
    
    computed: {
        ...mapState({
            TelegramWebApp: state => state.telegram.WebApp
        })
    }
}
</script>
