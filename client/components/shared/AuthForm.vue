<script setup>
import { authSchema } from '~/schemas/authSchema'

const emit = defineEmits(['submitHandler'])
const props = defineProps({
  formTitle: String,
  disabled: Boolean,
})

const form = ref()

const state = reactive({
  email: undefined,
  password: undefined,
})

const formSubmitHandler = (_event) => {
  emit('submitHandler', state, form)
}
</script>

<template>
  <h3 class="text-3xl font-bold mb-4">{{ props.formTitle }}</h3>

  <UForm
    @submit="formSubmitHandler($event)"
    :schema="authSchema"
    class="space-y-4"
    :state="state"
    ref="form"
  >
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton :disabled="props.disabled" type="submit">{{
      props.formTitle
    }}</UButton>
  </UForm>
</template>
