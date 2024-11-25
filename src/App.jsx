import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import BookingsPage from "./pages/bookings/BookingsPage";
import LandingPage from "./pages/landing-page/LandingPage";
import { BookingsProvider } from "./pages/bookings/BookingsContext";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/bookings"
          element={
            <BookingsProvider>
              <BookingsPage />
            </BookingsProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
