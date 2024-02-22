<template>
  <v-container class="mt-10">
    <v-row>
      <v-col>
        <v-tabs
          v-model="tab"
          class="auction__tabs"
          selected-class="auction__tabs__tab--active"
          align-tabs="start"
          height="40px"
        >
          <v-tab class="auction__tabs__tab" :ripple="false" value="Usernames">Usernames</v-tab>
          <v-tab class="auction__tabs__tab" :ripple="false" value="Numbers">Numbers</v-tab>
          <v-tab class="auction__tabs__tab" :ripple="false" value="Premium">Premium</v-tab>
        </v-tabs>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {defineComponent} from 'vue';
import {mapState} from "vuex";

export default defineComponent({

    name: 'AuctionView',
    
    data: () => ({
        tab: null
    }),

    computed: {
        ...mapState({
            twa: state => state.telegram.WebApp,
            user: state => state.telegram.user
        })
    },
    
    mounted() {
    
    }
})
</script>

<style lang="sass">

.auction
  &__tabs
    &__tab
      align-items: start
      
      min-height: auto !important
      height: 24px !important
      min-width: auto !important
      width: auto !important
      margin-right: 22px
      padding: 0
      
      font-size: 13px
      font-weight: normal
      letter-spacing: normal
      text-transform: unset

      color: var(--tg-theme-hint-color, $tg-hint-color) !important

      .v-btn__overlay, .v-btn__underlay
        display: none
      
      &--active
        color: var(--tg-theme-link-color, $tg-link-color) !important
        
    .v-tab__slider
      height: 4px
      border-radius: 6.67px 6.67px 0 0
</style>
