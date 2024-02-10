<script setup>
import { useNotification } from '~/composables/useNotification'
import AuthForm from '~/components/shared/AuthForm.vue'
import { signUpRequest } from '~/services/authRequest'
import { useRequest } from '~/composables/useRequest'
import { useRouter } from 'vue-router'

const { emitSuccessToast } = useNotification()
const { sendRequest, loading } = useRequest()
const router = useRouter()

const submitHandler = async (state, form) => {
  sendRequest(() => signUpRequest(state), {
    onSuccess: () => {
      emitSuccessToast('You have successfully signed up.')
      router.push({ path: '/' })
    },
  })
}
</script>

<template>
  <AuthForm
    @submit-handler="submitHandler"
    :disabled="loading"
    form-title="Sign up"
  ></AuthForm>
</template>
