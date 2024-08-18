import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/authContext";
import Login from "./components/Login";
import DogBreeds from "./components/DogBreeds";
import LayoutWrapper from "./components/LayoutWrapper";

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route element={<LayoutWrapper />}>
            <Route path="/" element={<Login />} />
            <Route path="/feed" element={<DogBreeds />} />
          </Route>
        </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
