import logo from "./logo.svg";
import "./App.css";
import FetchData from "./Api/FetchData";
import { QueryClientProvider, QueryClient } from "react-query";
import SimpleFade from "./Components/Fade";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h3>Enable Show to view Data</h3>
        <FetchData></FetchData>
      </div>
    </QueryClientProvider>
  );
}

export default App;
