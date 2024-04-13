<template>
  <v-container>
    <v-row>
      <v-col v-for="item in cards" cols="12" sm="6" md="4" xl="3" >
        <Card :item="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { reactive } from 'vue'

  const cards = reactive([{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"},{name:"Иванов Иван"}])
</script>
