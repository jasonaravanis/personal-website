import { NavBar } from "./components/NavBar/NavBar";
import { ThemeProvider } from "./contexts/Theme";

function App() {
  return (
    <>
      <ThemeProvider>
        <NavBar />
      </ThemeProvider>
    </>
  );
}

export default App;
