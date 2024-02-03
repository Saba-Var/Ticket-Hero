export const errorNotify = (error, toast) => {
  error?.response?.data?.errors.forEach((err) => {
    toast.add({
      icon: 'i-heroicons-information-circle',
      description: err.message,
      title: 'Error',
      color: 'red',
    })
  })
}

export const successNotify = (description, toast) => {
  toast.add({
    icon: 'i-heroicons-check-badge',
    title: 'Success',
    color: 'green',
    description,
  })
}
