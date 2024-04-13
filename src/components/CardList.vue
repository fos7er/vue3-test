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
  import type { doctor, specialization } from '../types'
  import type { Ref } from 'vue'
  import { computed, ComputedRef, ref } from 'vue'
  import { useDoctorStore } from '@/store/doctor'

  //region getList
  const store = useDoctorStore()
  // вот тут не понял почему IDE не подсвечивает правильный тип пришлось еще раз типизировать
  const cards: ComputedRef<doctor[]> = computed(() => store.list)
  const { getList } = store
  getList()
  //endregion

  //region filer
  const selectedSpecialization: Ref<number> = ref(null)

  const sorted = computed(() => {
    const result = new Map<number, number[]>()

    store.list.forEach((doctor: doctor, index: number) => {
      doctor.specializationList.forEach((item: specialization) => {
        result.has(item.id) ? result.get(item.id).push(index) : result.set(item.id, [index])
      })
    })

    return result
  })

  const filteredCards = computed(() => {
    if (selectedSpecialization.value) {
      const result: doctor[] = []
      const indexes: number[] = sorted.value.get(selectedSpecialization.value)

      if (indexes && indexes.length) {
        indexes.forEach(index => {
          result.push(cards.value[index])
        })
      }

      return result
    } else {
      return cards.value
    }
  })

  //endregion

  const availableSpecializations: ComputedRef<number[]> = computed(() => {
    return Array.from(sorted.value.keys())
  })
</script>
