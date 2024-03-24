<script setup>
import { CURRENT_USER_DATA_KEY } from '~/config/queryKeys'

const config = useRuntimeConfig()

const { data } = await useAsyncData(
  CURRENT_USER_DATA_KEY,
  () => $fetch(`${config.public.BACKEND_API_URL}/api/users/current-user`),
  {
    server: false,
  }
)
</script>

<template>
  <h1 class="bg-green-600 text-white">Data: {{ data }}</h1>
</template>
