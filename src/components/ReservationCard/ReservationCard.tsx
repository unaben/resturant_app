import React, { FC } from "react";
import { useAppDispatch } from "../../app/hooks";
import { removeReservation } from "../../features/reservation/ReservationSlice";
import { addCustomer } from "../../features/customer/CustomerSlice";
import { v4 as uuid } from "uuid";
import './ReservationCard.css'

type IReservationCardProps = {
  name: string;
  index: number;
};

const ReservationCard: FC<IReservationCardProps> = ({ name, index }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => {
        dispatch(removeReservation(index));
        dispatch(
          addCustomer({
            // id: index.toString(),
            id: uuid(),
            name,
            dishes: [],
          })
        );
      }}
      className="reservation-card-container"
    >
      {name}
    </div>
  );
};

export default ReservationCard;
