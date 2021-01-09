import Toast from 'react-native-toast-message'

type ToastType = 'success' | 'error'

export default function showToast(
  type: ToastType,
  text: string,
  subtext: string
) {
  Toast.show({
    type,
    text1: text,
    text2: subtext
  })
}
