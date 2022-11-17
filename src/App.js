import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Pages/Main";
import Header from "./Components/HeaderApp/Header";
import CartPage from "./Components/Pages/CartPage";
import BookPageDetails from "./Components/Pages/BookPageDetails";
import "./styles/App.css";
import "./styles/HeaderApp.css"; 

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/bookpage" element={<BookPageDetails />} />
        <Route
          path="*"
          element={
            <h1
              style={{
                fontSize: "50px",
                textAlign: "center",
                marginTop: "100px",
              }}
            >
              Ничего не найдено!
            </h1>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
