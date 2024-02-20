<template>
  <v-app>
    <AppHeader/>
    
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import AppHeader from "@/components/AppHeader.vue";

export default {
    name: 'App',
    components: {AppHeader},

    data: () => ({
        //
    }),

    mounted() {
        this.$store.dispatch('telegram/initTelegramWebApp', window.Telegram.WebApp)
        
        window.Telegram.initDa
    },
    
    
}
</script>
