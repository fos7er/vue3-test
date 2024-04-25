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
  import { computed } from 'vue'
  import { specialization } from '@/types'
  import { useSpecializationStore } from '@/store/specialization'

  const props = defineProps<{
    available: number[]
  }>()

  const store = useSpecializationStore()
  const buttons = computed<specialization[]>(() => store.list)
  const { getList } = store
  getList()

  const emit = defineEmits<{
    (e: 'update:modelValue', id: number | null): void
  }>()

  const clickHandler = (id) => {
    emit('update:modelValue', id)
  }

  const isDisabled = (id: number) => {
    return !props.available.includes(id)
  }
</script>
