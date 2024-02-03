import { useNotification } from '~/composables/useNotification'
import { ref, toRefs, reactive } from 'vue'

export const useRequest = ({
  showErrorNotification = true,
  onSuccess = () => {},
  onError = () => {},
} = {}) => {
  const state = toRefs({
    statusCode: ref(null),
    loading: ref(false),
    errors: ref([]),
  })

  const data = reactive({})

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
      state.statusCode.value = response.status
      data.value = response.data
      if (options.onSuccess) {
        options.onSuccess(response)
      } else if (onSuccess) {
        onSuccess(response)
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

  return { sendRequest, ...state, data }
}
