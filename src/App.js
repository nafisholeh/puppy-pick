import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/authContext";
import { ProgressContextProvider } from "./contexts/ProgressContext";
import Login from "./components/Login";
import DogBreeds from "./components/DogBreeds";
import LayoutWrapper from "./components/LayoutWrapper";

function App() {
  return (
    <UserAuthContextProvider>
      <ProgressContextProvider>
        <Router>
          <Routes>
            <Route element={<LayoutWrapper />}>
              <Route path="/" element={<Login />} />
              <Route path="/feed" element={<DogBreeds />} />
            </Route>
          </Routes>
        </Router>
      </ProgressContextProvider>
    </UserAuthContextProvider>
  );
}

export default App;
