import React from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Header />
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path="about" element={<About />} />
          </Routes>
        </div>
        <AboutIcon />
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
