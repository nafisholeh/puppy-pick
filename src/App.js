import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/authContext";
import Login from "./components/Login";
import DogBreeds from "./components/DogBreeds";

function App() {
  return (
    <UserAuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/feed" element={<DogBreeds />} />
        </Routes>
      </Router>
    </UserAuthContextProvider>
  );
}

export default App;
