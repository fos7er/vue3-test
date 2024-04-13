<template>
  <v-container>
    <v-row>
      <v-col class="pa-2">
        <v-btn-group>
          <v-btn
            v-for="item in buttons"
          >
            {{ item.name }}
          </v-btn>
        </v-btn-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { specialisation } from '@/types'
  const buttons: specialisation[] = reactive([{ id: 1, name: 'терапевт' }, { id: 2, name: 'ЛОР' }, {
    id: 3,
    name: 'окулист'
  }])

</script>
