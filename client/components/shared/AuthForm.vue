<script setup>
import { object, string } from 'yup'

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required'),
})

const form = ref()

const state = reactive({
  email: undefined,
  password: undefined,
})

const emit = defineEmits(['submitHandler'])
const props = defineProps({
  formTitle: String,
})

const formSubmitHandler = (_event) => {
  emit('submitHandler', state, form)
}
</script>

<template>
  <h3 class="text-3xl font-bold mb-4">{{ props.formTitle }}</h3>

  <UForm
    @submit="formSubmitHandler($event)"
    class="space-y-4"
    :schema="schema"
    :state="state"
    ref="form"
  >
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit">{{ props.formTitle }}</UButton>
  </UForm>
</template>
