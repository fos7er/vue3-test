<template>
  <v-container>
    <v-row>
      <v-col class="pa-2">
        <v-btn-group>
          <v-btn
            v-for="item in buttons"
            @click="clickHandler(item.id)"
          >
            {{ item.name }}
          </v-btn>
        </v-btn-group>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
  import type { specialization } from '../types'
  import { computed, ComputedRef } from 'vue'
  import { useSpecializationStore } from '@/store/specialization'

  const store = useSpecializationStore()
  // вот тут не понял почему IDE не подсвечивает правильный тип пришлось еще раз типизировать
  const buttons: ComputedRef<specialization[]> = computed(() => store.list)
  const { getList } = store
  getList()

  const emit = defineEmits<{
    'update:modelValue': [id: number]
  }>()

  const clickHandler = (id: number) => {
    emit('update:modelValue', id)
  }
</script>
