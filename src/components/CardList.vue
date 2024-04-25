<template>
  <v-container>
    <Controls
      v-model="selectedSpecialization"
      :available="availableSpecializations"
    />
    <v-row>
      <v-col v-for="item in filteredCards" cols="12" sm="6" md="4" xl="3">
        <Card :item="item"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import type { doctor, specialization } from '@/types'
  import { computed, ref } from 'vue'
  import { useDoctorStore } from '@/store/doctor'
  import Card from '@/components/Card'

  //region getList
  const store = useDoctorStore()
  const { getList } = store
  getList()
  //endregion

  //region filer
  const selectedSpecialization = ref<number | null>(null)

  const sorted = computed(() => {
    const result = new Map<number, number[]>()

    store.list.forEach((doctor: doctor, index: number) => {
      doctor.specializationList.forEach((item: specialization) => {
        result.has(item.id) ? result.get(item.id).push(index) : result.set(item.id, [index])
      })
    })

    return result
  })

  const filteredCards = computed<doctor[]>(() => {
    if (selectedSpecialization.value) {
      const result = []
      const indexes: number[] = sorted.value.get(selectedSpecialization.value)

      if (indexes && indexes.length) {
        indexes.forEach(index => {
          result.push(store.list[index])
        })
      }

      return result
    } else {
      return store.list
    }
  })
  //endregion

  const availableSpecializations = computed<number[]>(() => {
    return Array.from(sorted.value.keys())
  })
</script>
