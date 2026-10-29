import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes.jsx";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;