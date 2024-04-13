<template>
  <v-container>
    <v-row>
      <v-col v-for="item in cards" cols="12" sm="6" md="4" xl="3" >
        <Card :item="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { useDoctorStore } from '@/store/doctor'
  import { computed, ComputedRef } from 'vue'
  import { doctor } from '../types'

  const store = useDoctorStore()
  // вот тут не понял почему IDE не подсвечивает правильный тип пришлось еще раз типизировать
  const cards:ComputedRef<doctor[]> = computed(() => store.list)
  const { getList } = store
  getList()
</script>
