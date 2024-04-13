<template>
  <v-container>
    <v-row>
      <v-col class="pa-2">
        <div class="flex-wrap justify-content-center justify-center">
          <v-btn
            class="ma-2"
            @click="clickHandler(null)"
          >Все
          </v-btn>
          <v-btn
            class="ma-2"
            v-for="item in buttons"
            @click="clickHandler(item.id)"
            :disabled="isDisabled(item.id)"
          >
            {{ item.name }}
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import { computed, ComputedRef } from 'vue'
  import { specialization } from '../types'
  import { useSpecializationStore } from '@/store/specialization'

  const props = defineProps<{
    available: number[]
  }>()

  const store = useSpecializationStore()
  // вот тут не понял почему IDE не подсвечивает правильный тип пришлось еще раз типизировать
  const buttons: ComputedRef<specialization[]> = computed(() => store.list)
  const { getList } = store
  getList()

  const emit = defineEmits<{
    'update:modelValue': [id: number | null]
  }>()

  const clickHandler = (id: number | null) => {
    emit('update:modelValue', id)
  }

  const isDisabled = (id: number) => {
    return !props.available.includes(id)
  }
</script>
