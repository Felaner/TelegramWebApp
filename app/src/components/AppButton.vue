<template>
  <v-btn class="button" :class="'button--' + className">{{ text }}</v-btn>
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

</style>