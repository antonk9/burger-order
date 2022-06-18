import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import './assets/styles/app.scss'

function App() {
  return (
    <div className="app-frames">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
