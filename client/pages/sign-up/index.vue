<script setup>
import { AuthForm } from '~/components/shared/AuthForm'
import { axios } from '~/services/axios'

const submitHandler = async (event, state) => {
  console.log(event, state)
  axios.post('/api/users/sign-up', state)
}
</script>

<template>
  <AuthForm form-title="Sign up" @submit-handler="submitHandler"></AuthForm>
</template>
