import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

import theme from "../theme";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  );
}

export default MyApp;
