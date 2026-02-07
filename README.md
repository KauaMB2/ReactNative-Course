# 1 - Introdução & Configuração

O Expo é um framework de código aberto criado pela Meta para desenvolver aplicativos nativos para Android e iOS, Windows e outras plataformas. O Expo é uma ferramenta que abstrai grande parte da complexidade de configuração via CLI.

Por mais que o `pnpm` ofereça vantagens, é interessante usar o `npm`, pois o pnpm organiza as pastas de uma forma em que as dependências são linkadas ao armazenamento global ao invés de colocar as dependências diretamente no node_modules. O Metro, empacotador do React Native/Expo, tem dificuldade em seguir esses links.

Para mais informações, acesse este post do reddit: https://www.reddit.com/r/expo/comments/13gr7le/why_is_pnpm_not_supported_in_expo_app/

### Iniciar projeto:
```
npx create-expo-app my-ts-app --template blank-typescript
cd my-ts-app
npx expo start
```

### Instalando e configurando expo router:
https://docs.expo.dev/router/installation/

## Sobre expo, npx e npm
A diferença entre o `npm run dev` e `expo start` é nula, pois este é um atalho para aquele inicialmente. É recomendado usar `npx expo install` em detrimento de `npm install`, pois o expo install instalará as versões de bibliotecas específicas para a versão do SDK do Expo já instalado, evitando conflito de versão.

# 2 - Text, View e Image

É possível usar uma lista na propriedade style dos elementos de tal forma que os sucessores sobrepõem os antecessores.
```
style={[styles.title, {color: 'purple'}]}
```

Para importar imagens ou outros assets no projeto, é necessário criar um arquivo ``declarations.d.ts` na raiz do projeto com o conteúdo abaixo:
```
declare module '*.png' {
  const value: number
  export default value
}
```

# 5 - Temas claros e escuros
No arquivo `app.json`, temos a propriedade `userInterfaceStyle` que é usada para definir o tema da interface. Seu valor é obtido por meio do hook `useColorScheme()`.

# 6 - Componentes temáticos
Não é necessário criar componentes reutilizáveis passando a propriedadse children quando só há um children como no exemplo abaixo.
```typescript
const ThemedView = ({ style, children, ...props }: ThemedViewProps) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme!] ?? Colors.light
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  )
}
```
Basta usar props desestruturada que o React já entende:
```typescript
const ThemedView = ({ style, ...props }: ThemedViewProps) => {
    const colorScheme = useColorScheme()
    const theme = Colors[colorScheme!] ?? Colors.light
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  )
}

export default ThemedView
```