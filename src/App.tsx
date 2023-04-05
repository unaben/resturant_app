import React from "react";
import Customer from "./components/Customer/Customer";
import Reservation from "./components/Reservation/Reservation";
import ReservationFormInput from "./components/ReservationFormInput/ReservationFormInput";
import Header from "./components/Header/Header";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <Header />
            <Reservation />
          </div>
          <ReservationFormInput />
        </div>
        <Customer />
      </div>
    </div>
  );
};

export default App;
