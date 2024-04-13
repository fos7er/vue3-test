<template>
  <v-container>
    <v-row>
      <v-col class="pa-2">
        <v-btn-group>
          <v-btn
            v-for="item in buttons"
          >
            {{ item.name }}
            {{item}}
          </v-btn>
        </v-btn-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">

  import { useSpecialisationStore } from '@/store/specialisation'
  import { computed } from 'vue'

  const store = useSpecialisationStore()
  const buttons = computed(() => store.list)
  const { getList } = store

  getList()
</script>
