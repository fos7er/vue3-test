import { defineStore } from 'pinia'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { doctor } from '../types'
import file from '@/mocks/doctor.json'

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
