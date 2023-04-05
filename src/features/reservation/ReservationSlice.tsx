import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { ReservationState } from "../../model/interface";

const initialState: ReservationState = {
  reservations: [],
};

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {
    addReservation: (state, actions: PayloadAction<string>) => {
      state.reservations.push(actions.payload);
    },
    removeReservation: (state, actions: PayloadAction<number>) => {
      state.reservations = state.reservations.filter(
        (reservation, index) => index !== actions.payload
      );
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;
export const getAllReservation = (state: RootState) =>
  state.reservation.reservations;
export default reservationSlice.reducer;
