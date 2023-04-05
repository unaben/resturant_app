import React from "react";
import ReservationCard from "../ReservationCard/ReservationCard";
import { getAllReservation } from "../../features/reservation/ReservationSlice";
import { useAppSelector } from "../../app/hooks";
import "./Reservation.css";

const Reservation = () => {
  const reservations = useAppSelector(getAllReservation);
  return (
    <div className="reservation-cards-container">
      {reservations.map((name, index) => (
        <ReservationCard key={index} index={index} name={name} />
      ))}
    </div>
  );
};

export default Reservation;
