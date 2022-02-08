import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';
import { AuthProvider } from '../hooks/useLogin';
import { PokedexProvider } from '../hooks/usePokedex';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
        <AuthProvider>
          <PokedexProvider>
            <Component {...pageProps} />
          </PokedexProvider>
        </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
