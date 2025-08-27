import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import HeaderContainer from "./header/HeaderContainer";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <HeaderContainer />
    </ThemeProvider>
  );
}

export default App;
