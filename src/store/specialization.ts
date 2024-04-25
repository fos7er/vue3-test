import file from '@/mocks/specialization.json'
import type { specialization } from '../types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSpecializationStore = defineStore('specialization', () => {

  const list = ref<specialization[]>([])

  async function getList () {
    list.value = await get()
  }

  function get (): Promise<specialization[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(file), 100)
    })
  }

  return { getList, list }
})
