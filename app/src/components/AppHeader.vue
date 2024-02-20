<template>
  <v-app-bar>
    <v-container>
      <v-row>
        <v-col>
          <div class="d-flex justify-space-between align-center">
            <h1>Заголовок</h1>
            <AppButton class-name="default" text="Кнопка"/>
          </div>
        </v-col>
      </v-row>
    </v-container>
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

.button
  background-color: var(--tg-theme-button-color)
  color: var(--tg-theme-button-text-color)

</style>