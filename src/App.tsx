import { BrowserRouter, Routes, Route } from "react-router-dom";

import TitlePage from "./pages/TitlePage";
import RulePage from "./pages/RulePage";
import GamePage from "./pages/GamePage";
import ResultPage from "./pages/ResultPage";

function App() {
  return (
    <BrowserRouter basename="/color_select_game">
      <Routes>
        <Route path="/" element={<TitlePage />} />
        <Route path="/rule" element={<RulePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;