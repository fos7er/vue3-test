<template>
  <v-container>
    {{selectedSpecialization}}
    {{sorted}}
    <Controls v-model="selectedSpecialization"/>
    <v-row>
      <v-col v-for="item in cards" cols="12" sm="6" md="4" xl="3" >
        <Card :item="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import type { doctor, specialization } from '../types'
  import { computed, ComputedRef } from 'vue'
  import { ref } from 'vue'
  import { useDoctorStore } from '@/store/doctor'

  //region getList
  const store = useDoctorStore()
  // вот тут не понял почему IDE не подсвечивает правильный тип пришлось еще раз типизировать
  const cards:ComputedRef<doctor[]> = computed(() => store.list)
  const { getList } = store
  getList()
  //endregion

  //region filer
  const sorted = computed(() => {
    const result = {}

    store.list.forEach((doctor: doctor, index: number) => {
      doctor.specializationList.forEach((item: specialization) => {
        result[item.id] ? result[item.id].push(index) : result[item.id] = [index]
      })
    })

    return new Map(Object.entries(result))
  })
  //endregion


  const selectedSpecialization = ref(null)
</script>
