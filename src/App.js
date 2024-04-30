import './App.css';
import HomePage from './components/Home';
import { Provider } from 'react-redux';
import store from './store';
import {ThemeProvider} from "@mui/material/styles";
import theme from "./config/theme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
    <div className="App">
      <HomePage />
    </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
