<template>
  <v-card
    class="mx-auto my-12"
    max-width="374"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
        :active="isActive"
        color="deep-purple"
        height="4"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="@/assets/defaultAvatar.png"
      cover
    ></v-img>

    <v-card-item>
      <v-card-title>{{item.lastName}} {{item.firstName}} {{item.middleName}}</v-card-title>
      <v-card-subtitle>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :model-value="4.5"
          color="amber"
          density="compact"
          size="small"
          half-increments
          readonly
        ></v-rating>

        <div class="text-grey ms-4">
          4.5 (21)
        </div>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
  import { doctor } from '../types'
  const props = defineProps<{
    item: doctor
  }>()
</script>
