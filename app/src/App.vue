<template>
  <v-app class="app">
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
    },
    
    
}
</script>

<style lang="sass">

.app
  background: var(--tg-theme-secondary-bg-color, $tg-secondary-bg-color)
  color: var(--tg-theme-text-color, $tg-text-color)

</style>
