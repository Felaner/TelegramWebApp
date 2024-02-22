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
  &--text
    color: var(--tg-theme-link-color)
    
    background: none
  
  &--flat
    background-color: var(--tg-theme-button-color)
  

</style>