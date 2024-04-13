import file from '@/mocks/doctor.json'
import type { doctor } from '../types'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDoctorStore = defineStore('doctor', () => {

  const list: Ref<doctor[]> = ref([])

  async function getList () {
    list.value = await get()
  }

  function get (): Promise<doctor[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(file), 100)
    })
  }

  return { getList, list }
})
