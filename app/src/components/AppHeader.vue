<template>
  <v-app-bar class="app__bar" density="compact" :elevation="0">
    <div class="app__bar__wrapper">
      <AppButton @click="isAuctionPage ? closeApp() : toBackPage()" class-name="text" text="Cancel"/>

      <div class="app__bar__title">
        <h1 class="app__bar__title__text">App</h1>
        <span class="app__bar__title__caption">bot</span>
      </div>

      <button class="app__bar__button__menu">
        <IconEllipsisCircleOutline h="20px" w="20px"></IconEllipsisCircleOutline>
      </button>
    </div>
  </v-app-bar>
</template>

<script>

import AppButton from "@/components/AppButton.vue"
import {mapState} from "vuex";
import IconEllipsisCircleOutline from "@/components/icons/IconEllipsisCircleOutline.vue";

export default {
    name: 'AppHeader',
    components: {IconEllipsisCircleOutline, AppButton},

    data: () => ({
    
    }),

    computed: {
        ...mapState({
            twa: state => state.telegram.WebApp
        }),
        activeLink() {
            return this.$route.name
        },
        isAuctionPage() {
            return this.activeLink === 'auction'
        }
    },
    
    methods: {
        closeApp() {
            this.twa.close()
        },
        toBackPage() {
            console.log(this.activeLink)
        }
    }
}
</script>

<style lang="sass">

/* Позиционирование */

/* Блочная модель */

/* Типографика */

/* Оформление */

/* Анимация */

/* Разное */

.app__bar
  display: flex
  justify-content: space-around
  margin-top: 15px
  
  background: var(--tg-theme-secondary-bg-color, $tg-secondary-bg-color) !important
  
  &__wrapper
    position: relative
    
    display: flex
    justify-content: space-between
    width: 100%
    padding: 0 25px
  
  &__button
    &__menu
  &__title
    position: absolute
    left: 50%
    transform: translateX(-50%)

    display: flex
    flex-direction: column
    align-self: center


    color: var(--tg-theme-text-color, $tg-text-color)
      
    &__text
      font-size: 17px
      font-weight: bold
      line-height: 100%
      
    &__caption
      margin-top: 4px
      
      text-align: center

      color: var(--tg-theme-hint-color, $tg-hint-color)
      
      font-size: 13px
      line-height: 100%

</style>
<script setup>
</script>