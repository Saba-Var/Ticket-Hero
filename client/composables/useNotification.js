import { useToast } from '#imports'

export const useNotification = () => {
  const toast = useToast()

  const emitErrorToast = (error) => {
    error?.response?.data?.errors.forEach((err) => {
      toast.add({
        icon: 'i-heroicons-information-circle',
        description: err.message,
        title: 'Error',
        color: 'red',
      })
    })
  }

  const emitSuccessToast = (description) => {
    toast.add({
      icon: 'i-heroicons-check-badge',
      title: 'Success',
      color: 'green',
      description,
    })
  }

  return { emitErrorToast, emitSuccessToast }
}
