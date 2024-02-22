<template>
  <v-app-bar class="app__bar" density="compact" :elevation="0">
    <div class="app__bar__wrapper">
      <AppButton class-name="text" text="Cancel"/>

      <div class="app__bar__title">
        <h1 class="app__bar__title__text">App</h1>
        <span class="app__bar__title__caption">bot</span>
      </div>

      <button class="app__bar__button__menu">
        <v-img :src="require('@/assets/icons/elipsis_circle_outline.svg')" height="20px" width="20px"></v-img>
      </button>
    </div>
  </v-app-bar>
</template>

<script>

import AppButton from "@/components/AppButton.vue"

export default {
    name: 'AppHeader',
    components: {AppButton},

    data: () => ({

    }),

    computed: {

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
  
  color: var(--tg-theme-text-color) !important
  
  background: var(--tg-theme-bg-color) !important
  
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
      
    &__text
      font-size: 17px
      font-weight: bold
      line-height: 100%
      
    &__caption
      margin-top: 4px
      
      text-align: center

      color: rgba(120, 120, 120, 1)
      
      font-size: 13px
      line-height: 100%

</style>