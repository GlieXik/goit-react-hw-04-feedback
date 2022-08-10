import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from 'styled-components'
import {theme} from '../theme'
import {Feedback} from "./Feedback/Feedback"

export const App = () => {

  return (    
    <>
    <GlobalStyle/>
    <ThemeProvider theme={theme}>
      <Feedback >
      </Feedback>
    </ThemeProvider>
    </>
  );
};
