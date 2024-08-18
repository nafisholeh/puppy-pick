import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserAuthContextProvider } from "./contexts/authContext";
import { ProgressContextProvider } from "./contexts/ProgressContext";
import Login from "./components/Login";
import DogBreeds from "./components/DogBreeds";
import LayoutWrapper from "./components/LayoutWrapper";
import DogFeed from "./components/DogFeed";

function App() {
  return (
    <UserAuthContextProvider>
      <ProgressContextProvider>
        <Router>
          <Routes>
            <Route element={<LayoutWrapper />}>
              <Route path="/" element={<Login />} />
              <Route path="/breed" element={<DogBreeds />} />
              <Route path="/feed" element={<DogFeed />} />
            </Route>
          </Routes>
        </Router>
      </ProgressContextProvider>
    </UserAuthContextProvider>
  );
}

export default App;
