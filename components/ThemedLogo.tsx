import { Image, ImageProps, useColorScheme } from 'react-native'
import LightLogo from '../assets/img/logo_light.png'
import DarkLogo from '../assets/img/logo_dark.png'

interface ThemedLogo extends ImageProps {}

const ThemedLogo = ({ ...props }: ThemedLogo) => {
    const colorScheme = useColorScheme()
    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo
  return <Image source={logo} {...props} />
}

export default ThemedLogo
