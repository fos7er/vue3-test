import file from '@/mocks/specialization.json'
import type { Ref } from 'vue'
import type { specialisation } from '../types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

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
