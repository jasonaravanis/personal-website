import { NavBar } from "./components/NavBar/NavBar";
import "./App.scss";
import { ThemeProvider } from "./contexts/Theme";

function App() {
  return (
    <>
      <ThemeProvider>
        <header>
          <NavBar />
        </header>
      </ThemeProvider>
    </>
  );
}

export default App;
