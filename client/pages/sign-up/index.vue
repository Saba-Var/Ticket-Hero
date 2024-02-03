<script setup>
import { errorNotify, successNotify } from '~/utils/notifications'
import AuthForm from '~/components/shared/AuthForm.vue'
import { signUpRequest } from '~/services/authRequest'

const toast = useToast()

const submitHandler = async (state, form) => {
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
  }
}
</script>

<template>
  <AuthForm form-title="Sign up" @submit-handler="submitHandler"></AuthForm>
</template>
