import { BrowserRouter } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import { client } from './lib/apollo.ts'
import { Router } from './Router.tsx'
import { GlobalStyle } from './styles/global.ts'
import { defaultTheme } from './styles/themes/default.ts'

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
