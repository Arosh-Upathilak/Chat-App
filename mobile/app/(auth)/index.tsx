import { Text } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useSafeAreaStyle } from "../../hooks/useSafeAreaStyle";


const AuthIndex = () => {
  const safeAreaStyle = useSafeAreaStyle();
  return (
    <SafeAreaView className='bg-black flex-1 w-full'>
      <Text className='text-blue-500 text-2xl'>index</Text>
    </SafeAreaView>
  )
}

export default AuthIndex