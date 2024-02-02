<script setup>
import AuthForm from '../../components/shared/AuthForm/AuthForm.vue'

const submitHandler = async (event, state) => {
  console.log(event, state)
}
</script>

<template>
  <AuthForm form-title="Sign up" @submit-handler="submitHandler"></AuthForm>
</template>
