import "./App.css";
import Grid from "./components/Grid";
import ContextProvider from "./contexts/Context";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Grid />
      </ContextProvider>
    </div>
  );
}

export default App;
