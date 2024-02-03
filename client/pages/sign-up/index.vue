<script setup>
import { errorNotify, successNotify } from '~/utils/notifications'
import AuthForm from '~/components/shared/AuthForm.vue'
import { signUpRequest } from '~/services/authRequest'

const toast = useToast()

const disabled = ref(false)

const submitHandler = async (state, form) => {
  disabled.value = true
  try {
    const response = await signUpRequest(state)
    if (response.status === 201) {
      successNotify('You have successfully signed up.', toast)
      form.reset()
    } else {
      throw new Error('Something went wrong.')
    }
  } catch (error) {
    errorNotify(error, toast)
  } finally {
    disabled.value = false
  }
}
</script>

<template>
  <AuthForm
    @submit-handler="submitHandler"
    :disabled="disabled"
    form-title="Sign up"
  ></AuthForm>
</template>
