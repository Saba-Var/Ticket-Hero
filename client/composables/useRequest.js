import { useNotification } from '~/composables/useNotification'
import { ref, toRefs } from 'vue'

export const useRequest = ({
  showErrorNotification = true,
  onSuccess = () => {},
  onError = () => {},
} = {}) => {
  const state = toRefs({
    statusCode: ref(null),
    loading: ref(false),
    errors: ref([]),
    data: ref(null),
  })

  const { emitErrorToast } = useNotification()

  const sendRequest = async (
    request,
    options = {
      onSuccess: () => {},
      onError: () => {},
    }
  ) => {
    state.loading.value = true
    try {
      const response = await request()

      if (response) {
        state.statusCode.value = response.status
        state.data.value = response.data
        if (options.onSuccess) {
          options.onSuccess(response)
        } else if (onSuccess) {
          onSuccess(response)
        }
      } else {
        throw new Error('Request failed!')
      }
    } catch (error) {
      if (error?.response) {
        if (options.onError) {
          options.onError(error)
        } else if (onError) {
          onError(error)
        }
        if (showErrorNotification) {
          emitErrorToast(error)
        }
        state.errors.value = error?.response?.data?.errors
        state.statusCode.value = error?.response?.status
      }
    } finally {
      state.loading.value = false
    }
  }

  return { sendRequest, ...state }
}
