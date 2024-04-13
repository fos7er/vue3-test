import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'
import type { specialisation } from '../types'
import file from '@/mocks/specialization.json'

export const useSpecialisationStore = defineStore('specialization', () => {

  const list: Ref<specialisation[]> = ref([])

  async function getList () {
    list.value = await get()
  }

  function get (): Promise<specialisation[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(file), 100)
    })
  }

  return { getList, list }
})
