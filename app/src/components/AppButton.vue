<template>
  <button class="button" :class="'button--' + className">{{ text }}</button>
</template>

<script>

export default {
    name: 'AppButton',
    
    props: ['className', 'text'],

    data: () => ({

    }),

    computed: {
    
    }
}
</script>

<style lang="sass">

.button
  background-color: var(--tg-theme-button-color)
  color: var(--tg-theme-button-text-color)
  
  &--text
    color: var(--tg-theme-button-text-color)
  
  &--flat
  

</style>