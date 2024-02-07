import { Route, Routes } from "react-router-dom";
import { MainDashboardPage } from "./pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainDashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
