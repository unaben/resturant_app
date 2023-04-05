import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addReservation } from "../../features/reservation/ReservationSlice";
import "./ReservationFormInput.css";

const ReservationFormInput = () => {
  const [customerName, setCustomerName] = useState("");
  const dispatch = useAppDispatch();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addReservation(customerName));
    setCustomerName("");
  };
  return (
    <div className="reservation-input-container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="customerName"
          name="customerName"
          placeholder="Enter customer name..."
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default ReservationFormInput;
