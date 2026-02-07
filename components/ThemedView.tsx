import { StyleSheet, useColorScheme, View, ViewProps } from 'react-native'
import { Colors } from '../constants/Colors'

interface ThemedViewProps extends ViewProps {}

const ThemedView = ({ style, ...props }: ThemedViewProps) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme!] ?? Colors.light
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  )
}

export default ThemedView

const styles = StyleSheet.create({})