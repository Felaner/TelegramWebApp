<template>
  <v-container>
    <v-row>
      <v-col>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi eius fuga in ipsa iusto laborum obcaecati quasi reiciendis sit suscipit tempora tempore, veniam voluptatum! Animi distinctio illum libero quidem suscipit.</p>
        <h2>Ваш telegram: {{ user?.username }}</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {defineComponent} from 'vue';
import {mapState} from "vuex";

export default defineComponent({

    name: 'HomeView',

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
